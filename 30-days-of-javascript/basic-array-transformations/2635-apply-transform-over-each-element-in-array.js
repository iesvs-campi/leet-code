/**
 * leetcode: jesus_campos
 * problem: apply-transform-over-each-element-in-array
 * url: https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        newArray.push((fn(arr[i], i)));
    }
    return newArray;
};
