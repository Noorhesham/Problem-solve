var reverseWords = function (s) {
  const sentenceInReverse = s
    .trim()
    .split(" ")
    .filter((word) => word !== "")
    .reverse();
  return sentenceInReverse.join(" ");
};
