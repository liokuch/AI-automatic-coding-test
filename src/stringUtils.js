// 將第一個字母轉為大寫
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// 超過 maxLength 時截斷並加上 "..."，結果總長度不應超過 maxLength
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}

// 反轉字串
function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = { capitalize, truncate, reverseString };
