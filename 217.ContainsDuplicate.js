// const containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length -1 ; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

//Brute force
//Time: O(n**2)
//Space: O(1)
//------------------------------------------------------------------
//use sort() Time: O(nlogn) Space: O(1)

//------------------------------------------------------------------
//Hash set, use extra memory,  Time: O(n) Space: O(n)

const containsDuplicate = (nums) => {
  const arr = new Set(nums);
  if (arr.size === nums.length) {
    return false;
  }
  return true;
};

console.log(containsDuplicate([1, 2, 3, 3]));
