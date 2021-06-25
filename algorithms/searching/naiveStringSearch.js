function searchString(string, substr) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (substr[j] !== string[i + j]) {
        break;
      }
      // this condition tells we're at the end of the length of the substring we're searching for
      if (j === substr.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(searchString("hello dear lover", "lo"));
("lo");
