/**
 * leetcode: jesus_campos
 * problem: filter-elements-from-array
 * url: https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
          filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};
