import argparse
import os
import re
import urllib.parse

import requests
from anthropic import Client
from bs4 import BeautifulSoup
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Define Anthropic API Key
anthropic_key = os.getenv("ANTHROPIC_API_KEY")


def extract_yaml_content(text: str):
    pattern = r"<yaml>(.*?)</yaml>"
    match = re.search(pattern, text, re.DOTALL)

    if match:
        return match.group(1).strip()
    else:
        raise Exception("No YAML content found in the response")


# Function to clean HTML content using BeautifulSoup
def clean_html_content(html_content: str) -> str:
    soup = BeautifulSoup(html_content, "html.parser")

    # Remove style, script, meta, svg, and path tags
    for tag in soup(["style", "script", "meta", "svg", "path"]):
        tag.decompose()

    # Remove inline styles and classes
    for tag in soup():
        tag.attrs = {
            key: value
            for key, value in tag.attrs.items()
            if key not in ["style", "class"]
        }

    # Remove empty div tags
    for div in soup.find_all("div"):
        if len(div.get_text(strip=True)) == 0 and len(div.find_all()) == 0:
            div.decompose()

    return str(soup)


# Function to call Anthropic API and generate OpenAPI spec
def generate_openapi_spec(clean_html: str) -> str:
    client = Client(api_key=anthropic_key)

    # Prepare the prompt
    prompt = f"""{clean_html}\n\n Generate OpenAPI spec for the API shown in the above html content. 
Response format:
<yaml>
The OpenAPI spec in YAML format should be returned here. 
</yaml>
"""
    # Call Anthropic API
    message = client.messages.create(
        model="claude-3-5-sonnet-20240620",
        max_tokens=8192,
        system="Only return the OpenAPI spec in YAML format.",
        messages=[
            {"role": "user", "content": prompt},
        ],
    )
    yaml_content = extract_yaml_content(message.content[0].text)
    return yaml_content


# Function to fetch and clean HTML from a URL
def fetch_and_clean_html(url: str) -> str:
    response = requests.get(url)

    if response.status_code != 200:
        raise Exception(f"Failed to fetch URL. Status code: {response.status_code}")

    clean_html = clean_html_content(response.text)
    return clean_html


def url_to_filename(urls: list) -> str:
    # Use the first URL in the list for the filename
    url = urls[0]

    # Remove the protocol (http:// or https://) from the URL
    url_without_protocol = url.split("://", 1)[-1]

    # Remove leading and trailing slashes, replace remaining special characters with underscores
    filename = (
        url_without_protocol.strip("/")
        .replace("/", "_")
        .replace(":", "_")
        .replace("?", "_")
        .replace("&", "_")
        .replace("=", "_")
        .replace("#", "_")
        .replace(".", "_")
    )
    # Add .yaml extension
    return f"{filename}.yaml"


# Function to write content to a file
def write_to_file(content: str, filename: str):
    os.makedirs("output", exist_ok=True)
    file_path = os.path.join("output", filename)
    with open(file_path, "w") as file:
        file.write(content)
    print(f"OpenAPI spec written to {file_path}")


# Function to fetch and combine HTML from multiple URLs
def fetch_and_combine_html(urls: list) -> str:
    combined_html = ""
    for url in urls:
        try:
            html = fetch_and_clean_html(url)
            combined_html += f"<h2>{url}</h2>\n{html}\n\n"
        except Exception as e:
            print(f"Error fetching {url}: {e}")
    return combined_html


# Main function to run the script
def main():
    urls = [
        ["https://docs.anthropic.com/en/api/messages"],
        [
            "https://openrouter.ai/docs/requests",
            "https://openrouter.ai/docs/responses",
        ],
        ["https://console.groq.com/docs/api-reference#chat"],
    ]
    for url_group in urls:
        try:
            clean_html = fetch_and_combine_html(url_group)
            openapi_spec = generate_openapi_spec(clean_html)
            filename = url_to_filename(url_group)
            write_to_file(openapi_spec, filename)
        except Exception as e:
            print(f"Error processing URL group: {e}")


if __name__ == "__main__":
    main()
