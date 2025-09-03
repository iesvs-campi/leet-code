/**
 * leetcode: jesus_campos
 * problem: allow-one-function-call
 * url: https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy 
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    //need a "detection" for calls 
    let call = true;
    return function(...args){
        if(call){
        call = false;
        return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

