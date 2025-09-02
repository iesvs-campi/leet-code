/**
 * leetcode: jesus_campos
 * problem: return-length-of-arguments-passed
 * url: https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy 
 */


/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
    
    /* Firs try:
    let count;
    for (count = 0; count < args.length ; count++);return count;
     */
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
