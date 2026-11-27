const test = require("node:test");
const assert = require("node:assert");
const { capitalize, truncate } = require("../src/stringUtils");

test("capitalize: 一般字串", () => {
  assert.strictEqual(capitalize("hello"), "Hello");
});

test("capitalize: 空字串應回傳空字串", () => {
  assert.strictEqual(capitalize(""), "");
});

test("truncate: 短字串不變", () => {
  assert.strictEqual(truncate("Hi", 10), "Hi");
});

test("truncate: 超長字串結果總長度等於 maxLength", () => {
  assert.strictEqual(truncate("Hello World", 8), "Hello...");
});

// 注意：reverseString 故意沒有測試
