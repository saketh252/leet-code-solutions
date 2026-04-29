/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen={}// store all the values in key values pairs

    for(let i=0;  i<nums.length; i++){

        let current =nums[i];// loop and break everything equally

        let complement =target-current;

        if (seen[complement]!==undefined){


            return[seen[complement],i];

        }
        seen [current]=i;
    }


        
};