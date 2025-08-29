/**
 * leetcode: jesus_campos
 * problem: counter
 * url: https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy 
 */

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
