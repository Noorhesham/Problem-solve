var reverseVowels = function (s) {
  // make a unique set of the characters that we will use
  const vowels = new Set("aeiouAEIOU");
  let [i, j] = [0, s.length - 1];
  const arr = s.split("");

  while (j > i) {
    if (vowels.has(s[i]) && vowels.has(s[j])) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else if (vowels.has(s[i])) {
      j--;
      continue;
    } else if (vowels.has(s[j])) {
      i++;
      continue;
    }
    i++;
    j--;
  }
  return arr.join("");
};
