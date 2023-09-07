//242. Valid Anagram

var isAnagram = function (s, t) {
  if (s === t && s.length > 1 && t.length > 1) {
    return false;
  }
  const ss = s.split('').sort().join();
  const tt = t.split('').sort().join();
  if (ss === tt) {
    return true;
  }
  return false;
};

console.log(isAnagram('a', 'a')); //true


//Time: O(nlogn)
//Spave: O(1)