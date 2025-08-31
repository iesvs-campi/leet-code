/**
 * leetcode: jesus_campos
 * problem: array-reduce-transformation
 * url: https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy
 */


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
   let accum = init;

    for(let i = 0; i < nums.length; i++){
        accum = fn(accum, nums[i]);
    }
    return accum ;

//First try:
   /* 
    if(!nums.length)return init;

    let accum = fn(init, nums[0]);

    for(let i = 1; i < nums.length; i++){
        accum = fn(accum, nums[i]);
    }
    return accum ;
    */
};
