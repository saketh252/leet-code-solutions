/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let seen={}// creating a hasmap for numbers we have seen ie an object
    // format number equals index 

    //looping through the array 
    for(let i=0;i<nums.length; i++){
        // creating an index at i
        let current =nums[i];

        //calucuate the current number needed to reach the complement
        let complement = target - current;
        // check if the target already exist in seen if 'seen"
        // if yes we have found the complement

        if (seen[complement] !== undefined){
            //return the indices
            return[seen[complement],i];
        }
        // if not found,store the current nubers and its index
           seen[current]=i
    }
}

        


    


    

    