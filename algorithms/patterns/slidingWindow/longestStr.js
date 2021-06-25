function longestSubStr(str) {
  if (str.length <= 0) return null;
  let currentMax = 0;
  let countUnique = 0;

  for (let i = 0; i < str.length; i++) {
    countUnique++;
    if (str[i] === str[i + 1]) {
      countUnique = 0;
    }

    currentMax = Math.max(currentMax, countUnique);
  }

  return currentMax;
}

console.log(longestSubStr("dayyo"));
