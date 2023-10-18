import { arrayLength } from "./tools.js";
import { arrayPush } from "./tools.js";

describe("Given arrayLength", () => {
  test("should first", () => {
    const testData = [];
    const expected = 0;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test("should first", () => {
    const testData = [1, 4, 7];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test("should first", () => {
    const testData = [1, null, undefined];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });
});

describe("When the argument is  ", () => {
  test("then result should be", () => {
    const testD = [""];
    const item = "a";
    const expected = 2;
    const result = arrayPush(testD, item);
    expect(result).toBe(expected);
  });

  test("then result should be", () => {
    const testD = [];
    const item = {};
    const expected = 1;
    const result = arrayPush(testD, item);
    expect(result).toBe(expected);
  });

  test("then result should be", () => {
    const testD = [];
    const item = 2;
    const expected = 1;
    const result = arrayPush(testD, item);
    expect(result).toBe(expected);
  });

  test("then result should be", () => {
    const testD = [true];
    const item = false;
    const expected = 2;
    const result = arrayPush(testD, item);
    expect(result).toBe(expected);
  });
});
