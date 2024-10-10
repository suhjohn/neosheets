import { type Resource } from "./types/resource";
import { type FunctionBindingType, type FunctionType } from "./types/sheet";

// Existing Function IDs
const SUM_FUNCTION_ID = "53d5f76e-6bea-4270-9ddc-0442da164ba9";
const AVG_FUNCTION_ID = "34568bf2-ed60-405e-82f3-79427b8ea10a";
const COUNT_FUNCTION_ID = "7282dc6d-9d4c-402d-b7b6-8190862abd04";
const MAX_FUNCTION_ID = "ba2d4ec3-8804-4f88-bc7b-fa86d4cfc210";
const MIN_FUNCTION_ID = "01d288d2-afaa-4937-9e5b-85e935c8ef38";
const IF_FUNCTION_ID = "6a62fed3-7851-40cf-a57a-6422d2256ea5";
const CONCATENATE_FUNCTION_ID = "86776994-461d-4ce5-88c8-5f58aea5f2a6";
const LEFT_FUNCTION_ID = "7cfcb3b0-1eb3-4571-9967-e54766e1c96e";
const RIGHT_FUNCTION_ID = "7603ac89-43d6-439d-bb68-d430b8ad06fe";
const LEN_FUNCTION_ID = "60ecd94f-2bd8-4090-9170-7d9cf3a02a0c";
const ROUND_FUNCTION_ID = "bfa09fb4-bd57-45c4-a367-9acc21921c16";
const TRIM_FUNCTION_ID = "e8c6bdfe-e93e-491e-b690-d917da198ac7";
const UPPER_FUNCTION_ID = "f586885c-bed7-43d9-8093-480372b1e4e8";
const LOWER_FUNCTION_ID = "a0bba0d4-c7ef-4377-a1a0-d90cbf22d97d";
const PROPER_FUNCTION_ID = "064ded75-d272-4cf3-bcc7-e7c4d57cebae";
const TODAY_FUNCTION_ID = "2643a092-db0c-4733-8c08-99f2e27f60b1";
const NOW_FUNCTION_ID = "db53f15c-106a-4887-a513-e4b68900c2d0";
const AND_FUNCTION_ID = "39d0c9a7-33ae-4a81-9da3-463f95bf7bfc";
const OR_FUNCTION_ID = "66288597-bb69-4d66-93cd-6faaa33073d4";
const NOT_FUNCTION_ID = "cdfafe1b-a9ea-4c47-869a-331db1a7faa0";
const VLOOKUP_FUNCTION_ID = "124512b3-f745-4228-a996-d386e2e47c45";
const HLOOKUP_FUNCTION_ID = "d6ec405b-5acc-4011-8220-3fbb659b9f09";
const INDEX_FUNCTION_ID = "c531c261-008a-4757-bf46-25f73a2a1d53";
const MATCH_FUNCTION_ID = "12592269-cf7b-4ece-b3cd-5e1b3c794669";
const SUMIF_FUNCTION_ID = "c7a292f7-1a7c-4c8d-b6d2-ff4d332cb770";
const COUNTIF_FUNCTION_ID = "58503373-a666-43b6-b9a0-02efb1b59738";
const IFERROR_FUNCTION_ID = "47f9af50-e229-4baf-98e0-2a3427230daf";
const SUBSTITUTE_FUNCTION_ID = "e1933dc3-952b-4d77-8921-dc2ca6f9f8ad";
const SEARCH_FUNCTION_ID = "7fc44f59-a014-499a-a954-b5da15ae6b8d";
const ROUNDUP_FUNCTION_ID = "f8cbbf75-a771-4254-86d1-1b80c69f06c5";
const ROUNDDOWN_FUNCTION_ID = "728f7461-1be2-44d7-a6bb-380a8ecbfb77";
const EXTRACT_XML_CONTENT_FUNCTION_ID = "01e17b6d-5390-4edc-9f4a-fe0584d665c9";

export const DEFAULT_FUNCTIONS: FunctionType[] = [
  {
    id: SUM_FUNCTION_ID,
    functionName: "SUM",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){ 
  return args.reduce((a, b) => a + b, 0); 
}`,
    description: "Add numbers together",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
  {
    id: AVG_FUNCTION_ID,
    functionName: "AVERAGE",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){ 
  return args.reduce((a, b) => a + b, 0) / args.length; 
}`,
    description: "Averages two numbers",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
  {
    id: COUNT_FUNCTION_ID,
    functionName: "COUNT",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){ 
  return args.filter(arg => typeof arg === 'number').length;
}`,
    description: "Counts the number of cells that contain numbers",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
  {
    id: MAX_FUNCTION_ID,
    functionName: "MAX",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){ 
  return Math.max(...args.filter(arg => typeof arg === 'number'));
}`,
    description: "Returns the largest value in a set of numbers",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
  {
    id: MIN_FUNCTION_ID,
    functionName: "MIN",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){ 
  return Math.min(...args.filter(arg => typeof arg === 'number'));
}`,
    description: "Returns the smallest value in a set of numbers",
    createdAt: "2024-08-01T00:00:00.000Z",
    updatedAt: "2024-08-01T00:00:00.000Z",
  },
  {
    id: IF_FUNCTION_ID,
    functionName: "IF",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(condition, valueIfTrue, valueIfFalse){
  return condition ? valueIfTrue : valueIfFalse;
}`,
    description:
      "Returns one value if a condition is true and another value if it's false",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: CONCATENATE_FUNCTION_ID,
    functionName: "CONCATENATE",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){
  return args.join('');
}`,
    description: "Joins several text items into one text item",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: LEFT_FUNCTION_ID,
    functionName: "LEFT",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text, numChars = 1){
  return text.substring(0, numChars);
}`,
    description: "Returns the first character or characters in a text string",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: RIGHT_FUNCTION_ID,
    functionName: "RIGHT",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text, numChars = 1){
  return text.substring(text.length - numChars, text.length);
}`,
    description: "Returns the last character or characters in a text string",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: LEN_FUNCTION_ID,
    functionName: "LEN",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text){
  return text.length;
}`,
    description: "Returns the number of characters in a text string",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: ROUND_FUNCTION_ID,
    functionName: "ROUND",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(number, numDigits = 0){
  return Number(Math.round(number + 'e' + numDigits) + 'e-' + numDigits);
}`,
    description: "Rounds a number to a specified number of digits",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: TRIM_FUNCTION_ID,
    functionName: "TRIM",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text){
  return text.replace(/^\\s+|\\s+$/g, '').replace(/\\s+/g, ' ');
}`,
    description:
      "Removes all spaces from text except for single spaces between words",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: UPPER_FUNCTION_ID,
    functionName: "UPPER",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text){
  return text.toUpperCase();
}`,
    description: "Converts text to uppercase",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: LOWER_FUNCTION_ID,
    functionName: "LOWER",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text){
  return text.toLowerCase();
}`,
    description: "Converts text to lowercase",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: PROPER_FUNCTION_ID,
    functionName: "PROPER",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text){
  return text.replace(/\\w\\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}`,
    description: "Capitalizes the first letter of each word in a text string",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: TODAY_FUNCTION_ID,
    functionName: "TODAY",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(){
  const today = new Date();
  return today.toISOString().split('T')[0];
}`,
    description: "Returns the current date",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: NOW_FUNCTION_ID,
    functionName: "NOW",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(){
  return new Date().toISOString();
}`,
    description: "Returns the current date and time",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: AND_FUNCTION_ID,
    functionName: "AND",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){
  return args.every(arg => Boolean(arg));
}`,
    description: "Returns TRUE if all arguments are TRUE",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: OR_FUNCTION_ID,
    functionName: "OR",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(...args){
  return args.some(arg => Boolean(arg));
}`,
    description: "Returns TRUE if any argument is TRUE",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: NOT_FUNCTION_ID,
    functionName: "NOT",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(arg){
  return !Boolean(arg);
}`,
    description: "Reverses the logical value of its argument",
    createdAt: "2024-09-17T00:00:00.000Z",
    updatedAt: "2024-09-17T00:00:00.000Z",
  },
  {
    id: VLOOKUP_FUNCTION_ID,
    functionName: "VLOOKUP",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(searchKey, range, index, isSorted = true) {
  for (let row of range) {
    if (isSorted) {
      if (row[0] === searchKey) {
        return row[index - 1];
      } else if (row[0] > searchKey) {
        break;
      }
    } else {
      if (row[0] === searchKey) {
        return row[index - 1];
      }
    }
  }
  return null;
}`,
    description:
      "Looks for a key in the first column of a range and returns the value in the same row from a specified column.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: HLOOKUP_FUNCTION_ID,
    functionName: "HLOOKUP",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(searchKey, range, index, isSorted = true) {
  for (let col = 0; col < range[0].length; col++) {
    if (isSorted) {
      if (range[0][col] === searchKey) {
        return range[index - 1][col];
      } else if (range[0][col] > searchKey) {
        break;
      }
    } else {
      if (range[0][col] === searchKey) {
        return range[index - 1][col];
      }
    }
  }
  return null;
}`,
    description:
      "Looks for a key in the first row of a range and returns the value in the same column from a specified row.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: INDEX_FUNCTION_ID,
    functionName: "INDEX",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(range, rowNum, columnNum = 1) {
  if (rowNum < 1 || columnNum < 1) return null;
  const row = range[rowNum - 1];
  if (!row) return null;
  return row[columnNum - 1] !== undefined ? row[columnNum - 1] : null;
}`,
    description:
      "Returns the value of a cell in a specific row and column within a range.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: MATCH_FUNCTION_ID,
    functionName: "MATCH",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(searchKey, range, matchType = 1) {
  if (matchType === 1) { // Exact or next smallest
    let lastMatch = null;
    for (let i = 0; i < range.length; i++) {
      if (range[i] === searchKey) {
        return i + 1;
      }
      if (range[i] < searchKey) {
        lastMatch = i + 1;
      } else {
        break;
      }
    }
    return lastMatch;
  } else if (matchType === 0) { // Exact match
    for (let i = 0; i < range.length; i++) {
      if (range[i] === searchKey) {
        return i + 1;
      }
    }
    return null;
  } else if (matchType === -1) { // Exact or next largest
    for (let i = 0; i < range.length; i++) {
      if (range[i] === searchKey) {
        return i + 1;
      }
      if (range[i] > searchKey) {
        return i + 1;
      }
    }
    return null;
  }
  return null;
}`,
    description:
      "Returns the relative position of an item in a range that matches a specified value.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: SUMIF_FUNCTION_ID,
    functionName: "SUMIF",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(range, criterion, sumRange = null) {
  let sum = 0;
  for (let i = 0; i < range.length; i++) {
    let cell = range[i];
    let match = false;
    if (typeof criterion === 'string') {
      const regex = new RegExp('^' + criterion.replace('*', '.*').replace('?', '.') + '$');
      match = regex.test(cell);
    } else {
      match = cell === criterion;
    }
    if (match) {
      if (sumRange) {
        sum += typeof sumRange[i] === 'number' ? sumRange[i] : 0;
      } else {
        sum += typeof cell === 'number' ? cell : 0;
      }
    }
  }
  return sum;
}`,
    description: "Adds the cells specified by a given condition or criteria.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: COUNTIF_FUNCTION_ID,
    functionName: "COUNTIF",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(range, criterion) {
  let count = 0;
  for (let cell of range) {
    let match = false;
    if (typeof criterion === 'string') {
      const regex = new RegExp('^' + criterion.replace('*', '.*').replace('?', '.') + '$');
      match = regex.test(cell);
    } else {
      match = cell === criterion;
    }
    if (match) {
      count++;
    }
  }
  return count;
}`,
    description:
      "Counts the number of cells within a range that meet the given condition.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: IFERROR_FUNCTION_ID,
    functionName: "IFERROR",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(value, valueIfError) {
  try {
    // Attempt to evaluate the value
    // Since we can't execute arbitrary code, assume 'value' is a function
    return typeof value === 'function' ? value() : value;
  } catch (e) {
    return valueIfError;
  }
}`,
    description:
      "Returns a value you specify if a formula evaluates to an error; otherwise, returns the result of the formula.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: SUBSTITUTE_FUNCTION_ID,
    functionName: "SUBSTITUTE",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(text, oldText, newText, instance = 0) {
  if (instance > 0) {
    let parts = text.split(oldText);
    if (parts.length <= instance) return text;
    return parts.slice(0, instance).join(newText) + newText + parts.slice(instance).join(oldText);
  } else {
    return text.split(oldText).join(newText);
  }
}`,
    description: "Substitutes new text for old text in a string.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: SEARCH_FUNCTION_ID,
    functionName: "SEARCH",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(searchFor, text, start = 1) {
  const index = text.indexOf(searchFor, start - 1);
  return index !== -1 ? index + 1 : null;
}`,
    description:
      "Finds one text string within another text string and returns the position of the first character of the found text.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: ROUNDUP_FUNCTION_ID,
    functionName: "ROUNDUP",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(number, numDigits = 0) {
  const factor = Math.pow(10, numDigits);
  return Math.ceil(number * factor) / factor;
}`,
    description: "Rounds a number up, away from zero.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: ROUNDDOWN_FUNCTION_ID,
    functionName: "ROUNDDOWN",
    type: "function",
    createdBy: "neosheets",
    functionBody: `function run(number, numDigits = 0) {
  const factor = Math.pow(10, numDigits);
  return Math.floor(number * factor) / factor;
}`,
    description: "Rounds a number down, towards zero.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
  },
  {
    id: EXTRACT_XML_CONTENT_FUNCTION_ID,
    functionName: "EXTRACT_XML_CONTENT",
    type: "function",
    createdBy: "neosheets",
    description:
      "Extracts content enclosed within specified XML-style tags from a string.",
    createdAt: "2024-09-18T00:00:00.000Z",
    updatedAt: "2024-09-18T00:00:00.000Z",
    functionBody: `/**
 * Extracts content enclosed within specified XML-style tags from a string.
 * @param key - The XML tag to search for.
 * @param str - The string containing XML content.
 * @returns The content within the specified tags, or null if not found.
 */
function run(key: string, str: string) {
    // Escape the key to handle any special regex characters

    // Construct the regex pattern dynamically”
    const pattern = new RegExp(\`<\${key}>(.*?)<\\/\${key}>\`, 'is');

    // Execute the regex on the input string
    const match = pattern.exec(str);

    // If a match is found, return the captured group; otherwise, return ''
    return match ? match[1] : '';
}`,
  },
];

export const DEFAULT_FUNCTION_BINDINGS: FunctionBindingType[] = [
  {
    name: "SUM",
    functionId: SUM_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "AVERAGE",
    functionId: AVG_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "COUNT",
    functionId: COUNT_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "MAX",
    functionId: MAX_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "MIN",
    functionId: MIN_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "IF",
    functionId: IF_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "CONCATENATE",
    functionId: CONCATENATE_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "LEFT",
    functionId: LEFT_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "RIGHT",
    functionId: RIGHT_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "LEN",
    functionId: LEN_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "ROUND",
    functionId: ROUND_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "TRIM",
    functionId: TRIM_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "UPPER",
    functionId: UPPER_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "LOWER",
    functionId: LOWER_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "PROPER",
    functionId: PROPER_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "TODAY",
    functionId: TODAY_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "NOW",
    functionId: NOW_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "AND",
    functionId: AND_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "OR",
    functionId: OR_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "NOT",
    functionId: NOT_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "VLOOKUP",
    functionId: VLOOKUP_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "HLOOKUP",
    functionId: HLOOKUP_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "INDEX",
    functionId: INDEX_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "MATCH",
    functionId: MATCH_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "SUMIF",
    functionId: SUMIF_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "COUNTIF",
    functionId: COUNTIF_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "IFERROR",
    functionId: IFERROR_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "SUBSTITUTE",
    functionId: SUBSTITUTE_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "SEARCH",
    functionId: SEARCH_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "ROUNDUP",
    functionId: ROUNDUP_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "ROUNDDOWN",
    functionId: ROUNDDOWN_FUNCTION_ID,
    isCustom: false,
  },
  {
    name: "EXTRACT_XML_CONTENT",
    functionId: EXTRACT_XML_CONTENT_FUNCTION_ID,
    isCustom: false,
  },
];

export const DEFAULT_FONT_FAMILY = "Inter";
export const DEFAULT_FONT_SIZE = 12;

/** Resources */
export const OpenAIChatCompletionResource: Resource = {
  id: "ec5b7577-17f4-4c62-b810-bbd99733f0ff",
  name: "OpenAI Chat Completion",
  description:
    "OpenAI is an artificial intelligence research laboratory consisting of the for-profit OpenAI LP and the non-profit OpenAI Inc.",
  logoUrl: "/logo/openai.png",
  apiUrl: "https://api.openai.com/v1/chat/completions",
  authorization: {
    authMethod: "bearerToken",
    secretKeyName: "OPENAI_API_KEY",
  },
};

export const GeminiChatCompletionResource: Resource = {
  id: "c3fbbf25-65be-4c2b-b07d-4436dc46031d",
  name: "Gemini Chat Completion",
  description: "Gemini is Google's AI research lab.",
  logoUrl: "/logo/gemini.png",
  apiUrl: "https://generativelanguage.googleapis.com/v1beta/models",
  authorization: {
    authMethod: "bearerToken",
    secretKeyName: "GEMINI_API_KEY",
  },
};

export const AnthropicChatCompletionResource: Resource = {
  id: "0447038d-f5bf-49cd-84fa-5c4d12f84898",
  name: "Anthropic Chat Completion",
  description:
    "Anthropic is a research lab focused on building large-scale AI systems.",
  logoUrl: "/logo/anthropic.webp",
  apiUrl: "https://api.anthropic.com/v1/messages",
  authorization: {
    authMethod: "apiKey",
    secretKeyName: "ANTHROPIC_API_KEY",
    apiKeyLocation: "header",
    apiKeyName: "x-api-key",
  },
  additionalHeaders: {
    "anthropic-version": "2023-06-01",
  },
};

export const TogetherChatCompletionResource: Resource = {
  id: "02aa4081-8b45-46e7-9e8c-e1e8eb3a791a",
  name: "Together Chat Completion",
  description:
    "Together is a research lab focused on building large-scale AI systems",
  logoUrl: "/logo/together.png",
  apiUrl: "https://api.together.xyz/v1/chat/completions",
  authorization: {
    authMethod: "bearerToken",
    secretKeyName: "TOGETHER_API_KEY",
  },
};

export const GroqChatCompletionResource: Resource = {
  id: "40a5931f-0195-454d-a05a-5d3d91f1221b",
  name: "Groq Chat Completion",
  description:
    "Groq is a research lab focused on building large-scale AI systems",
  logoUrl: "/logo/groq.png",
  apiUrl: "https://api.groq.com/openai/v1/chat/completions",
  authorization: {
    authMethod: "bearerToken",
    secretKeyName: "GROQ_API_KEY",
  },
};

export const OpenRouterChatCompletionResource: Resource = {
  id: "d61fc72c-000c-4542-a170-76379576d444",
  name: "OpenRouter Chat Completion",
  description:
    "OpenRouter is a research lab focused on building large-scale AI systems",
  logoUrl: "/logo/openrouter.png",
  apiUrl: "https://openrouter.ai/api/v1/chat/completions",
  authorization: {
    authMethod: "bearerToken",
    secretKeyName: "OPENROUTER_API_KEY",
  },
};

export const DEFAULT_RESOURCES = [
  OpenAIChatCompletionResource,
  GeminiChatCompletionResource,
  AnthropicChatCompletionResource,
  TogetherChatCompletionResource,
  GroqChatCompletionResource,
  OpenRouterChatCompletionResource,
];
