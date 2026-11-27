// 計算平均值
function average(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

// 判斷是否為質數
function isPrime(n) {
  if (n < 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 將數字限制在 min ~ max 之間
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

module.exports = { average, isPrime, clamp };
