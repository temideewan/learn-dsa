// My solution
function anagram(str1, str2) {
  // they cannot possibly be anagrams if they have different lengths
  if (str1.length !== str2.length) {
    return false;
  }

  let strElems1 = {};
  let strElems2 = {};

  for (let char of str1) {
    strElems1[char] = (strElems1[char] || 0) + 1;
  }
  for (let char of str2) {
    strElems2[char] = (strElems2[char] || 0) + 1;
  }

  // this checks for the presence of that letter in the other string
  for (let letter in strElems1) {
    if (!strElems2[letter]) {
      return false;
    }

    // this check if their frequencies are the same

    if (!(strElems1[letter] == strElems2[letter])) {
      return false;
    }
  }

  return true;
}

// his Solution

function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(anagrams("anagram", "granama"));
