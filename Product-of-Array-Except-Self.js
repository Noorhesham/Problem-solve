// var productExceptSelf = function (nums) {
//   /*
//     we want to get the product sum of all the elements in the [i] place except the element itself
//     i will make an outer loop that has length of the array
//     another inner loop that has n-i times to get product sum of all elements except the element itself
//     we will push the answer to the results array
//      */
//   //i create array of results to hold them and outer loop the array
//   //create new array each time slicing the i we are in and loop over it to calc the product
//   const length = nums.length;
//   const results = [];
//   for (let i = 0; i < length; i++) {
//     const newArray = nums.filter((_, index) => index !== i);
//     const product = newArray.reduce((acc, cur) => acc * cur, 1);
//     results.push(product);
//   }
//   return results;
// };
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let prefix = 1;
  let postfix = 1;
  const results = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    results[i] = prefix;
    prefix = prefix * nums[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    results[i] = results[i] * postfix;
    postfix = postfix * nums[i];
  }

  return results;
};
