//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };



//The time complexity of this solution is O(n**2) as using nested loops to iterate through the array.
//Space: O(1)

//Map objects are collections of key-value pairs.
//Using Map()

const twoSum = function (nums, target) {
  let newMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (diff in newMap) {
      return [i, newMap[diff]];
    }
    newMap[nums[i]] = i;
  }
};
// console.log(twoSum([2,5,5,11], 10));

//Time Complexity O(n)
//Space Complexity O(1)