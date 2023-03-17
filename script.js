// function threeSum(arr, target) {
// write your code here
  
// }


function threeSum(arr, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = Infinity; // Initialize closestSum to a large value
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1, right = arr.length - 1; // Initialize two pointers
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === target) {
        return sum; // If sum equals target, return it
      } else if (sum < target) {
        left++; // If sum is less than target, move left pointer to the right
      } else {
        right--; // If sum is greater than target, move right pointer to the left
      }
      // Update closestSum if sum is closer to target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
    }
  }
  return closestSum; // Return the closest sum found
}


module.exports = threeSum;
