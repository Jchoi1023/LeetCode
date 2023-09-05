const containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length -1 ; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

//Time: O(n**2)
//Space: O(1)

console.log(containsDuplicate([1, 2, 3, 22]));
