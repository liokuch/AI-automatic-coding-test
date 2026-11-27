const test = require("node:test");
const assert = require("node:assert");
const { average, isPrime, clamp } = require("../src/mathUtils");

test("average: 一般陣列", () => {
  assert.strictEqual(average([2, 4, 6]), 4);
});

test("average: 空陣列應回傳 0", () => {
  assert.strictEqual(average([]), 0);
});

test("isPrime: 質數與非質數", () => {
  assert.strictEqual(isPrime(7), true);
  assert.strictEqual(isPrime(9), false);
});

test("isPrime: 1 不是質數", () => {
  assert.strictEqual(isPrime(1), false);
});

test("clamp: 範圍限制", () => {
  assert.strictEqual(clamp(15, 0, 10), 10);
  assert.strictEqual(clamp(-5, 0, 10), 0);
  assert.strictEqual(clamp(5, 0, 10), 5);
});
