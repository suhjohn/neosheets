# Neosheets

Spreadsheets where regular code and LLM can be written as formulas.

<video width="640" height="480" controls>
  <source src="https://github.com/suhjohn/neosheets/raw/refs/heads/main/docs/demo-moderation.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>


## Why do we need another Spreadsheet?

Spreadsheets have been around forever, but it's clunky to define a single prompt that can be tested across a dataset.

Claude Workbench is a great start, but there are a couple issues:

1. It's limited to just Claude, not other providers like OpenAI or Together.
2. The UX is not really oriented for calling different prompts on a single spreadsheet. 

Neosheets tries to bring the familiar interface of Spreadsheets but allow writing arbitrary code as well as LLM prompts. 

## Features
- Create Spreadsheet and sub sheets
- Run formulas on sheets
- Define custom formulas that can be arbitrary JS / TS code and LLM prompts connecting to the major providers 
- Define parallelism that the API endpoint can support 
