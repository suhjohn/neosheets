// @/lib/utils.test.ts
import {
  DEFAULT_CELL_BORDER_WIDTH,
  DEFAULT_CELL_PADDING,
  DEFAULT_COLUMN_WIDTH,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
} from "@/constants";
import { calculateTextHeight } from "./utils";

describe("calculateTextHeight", () => {
  const DEFAULT_PARAMS = {
    font: `${DEFAULT_FONT_SIZE}px Arial`,
    width:
      DEFAULT_COLUMN_WIDTH -
      DEFAULT_CELL_BORDER_WIDTH * 4 -
      DEFAULT_CELL_PADDING * 4,
    lineHeight: DEFAULT_LINE_HEIGHT,
  };

  function expectNLines(result: number, n: number) {
    expect(result).toBe(Math.ceil(n * DEFAULT_FONT_SIZE * DEFAULT_LINE_HEIGHT));
  }

  test("should return correct height for single line text", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      text: "Short text",
    });
    expectNLines(result, 1);
  });

  test("should handle multi-line text with wrapping", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      text: "0 1 grape,strawberry,fig,banana",
    });
    expectNLines(result, 3);
  });

  test("should respect explicit line breaks", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      text: "Line 1\nLine 2\nLine 3",
    });
    expectNLines(result, 3);
  });

  test("should handle very long words", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      text: "Supercalifragilisticexpialidocious",
    });
    expectNLines(result, 2);
  });

  test("should handle empty string", () => {
    const result = calculateTextHeight({ ...DEFAULT_PARAMS, text: "" });
    expectNLines(result, 1);
  });

  test('"hide" display mode should handle newlines', () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "hide",
      text: "Line 1\nLine 2\nLine 3",
    });
    expectNLines(result, 3);
  });

  test('"hide" display mode with long test should still be fine', () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "hide",
      text: "Line 1 asdfpqweasp\nLine 2 1asdfpqweasdf\nLine 3 1asdfpqweasdf",
    });
    expectNLines(result, 3);
  });

  test("should handle text with multiple spaces", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      text: "Word   with   multiple   spaces",
    });
    expectNLines(result, 2);
  });

  test("should wrap at the last space before exceeding width", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      text: "Long word short word Test word",
    });
    expectNLines(result, 2);
  });

  test("should handle very narrow width", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      width: 48,
      text: "nardrawerdwardwar",
    });
    expectNLines(result, 3);
  });
  test("should handle very narrow width with long words", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      display: "wrap",
      text: `"{"id":"chatcmpl-ACgUkYHPfl7SXlq6527R7RwIOLr2o","object":"chat.completion","created":1727586650,"model":"gpt-4o-2024-05-13","choices":[{"index":0,"message":{"role":"assistant","content":"Why did the iPhone go to school?\n\nBecause it wanted to become a little bit \"smarter\"!","refusal":null},"logprobs":null,"finish_reason":"stop"}],"usage":{"prompt_tokens":17,"completion_tokens":21,"total_tokens":38,"completion_tokens_details":{"reasoning_tokens":0}},"system_fingerprint":"fp_5796ac6771"}"`,
    });
    expectNLines(result, 27);
  });
  test("2 2 zucchini,date,fig,orange,quince,honeydew,lemon", () => {
    const result = calculateTextHeight({
      ...DEFAULT_PARAMS,
      width: 110,
      display: "wrap",
      text: "2 2 zucchini,date,fig,orange,quince,honeydew,lemon",
    });
    expectNLines(result, 3);
  });
});
