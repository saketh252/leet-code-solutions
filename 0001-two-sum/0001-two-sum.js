/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen = {};
    
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let complement = target - currentNumber;

        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }

        seen[currentNumber] = i;
    }
};