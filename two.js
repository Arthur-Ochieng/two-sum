// This is a similar implementation but in Javascript -- the algorithm for the workflow is:
// Loop through all the elements in the array
// Use another for loop to get another set of the elements, but this loop should always be one index ahead of the previous loop
// This iteration helps to avoid adding two similar numbers which might result to the required target
// Return the two indices of the elements if and only if they add up to the stipulated target


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    for (i=0; i<nums.length; i++){                                      // Initiate the first for loop
        for(j=i+1; j<nums.length; j++){                      // This is the second loop
            if(nums[i] + nums[j]=== target){         // Check if it meets the target, if not start the loop again with new parameters
                return[i,j]                          // Return the indices if the elements do exist
            }
        }
    }
};