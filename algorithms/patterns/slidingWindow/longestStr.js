function longestSubStr(str) {
  if (str.length <= 0) return null;
  let currentMax = 0;
  let countUnique = 0;
  // first remove all the spaces and irrelevant characters
  let cleaned = str.replace(/[^\w+]/g, '');
  // loop over the cleaned one
  for (let i = 0; i < cleaned.length -1; i++) {
    countUnique++;
    if (cleaned[i] === cleaned[i + 1]) {
      countUnique = 0;
    }

    currentMax = Math.max(currentMax, countUnique+1);
  }

  return currentMax;
}

console.log(longestSubStr("hello there"));
