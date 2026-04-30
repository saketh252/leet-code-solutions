
 //* @param {number[]} nums//
 //* @param {number} target//
 //* @return {number[]}
 var twoSum = function(nums, target){// function so that we reach target 
    let map={};// storing the keys value pairs and also creating a hash map
    
    for (let i=0;i<nums.length; i++){
        let complement = target - nums[i];

        if(map[complement]!==undefined){// if complement exists then we seen the nu
    
       return[map[complement],i];
        } 
       // return the indices the map complement
       map[nums[i]]=i;//  store the current number index in the map 

       

        
    }





 };



        

