/**
 * leetcode: jesus_campos
 * problem: function-composition
 * url: https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy 
 */


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        //function composition: fn(x) = f(g(h(x)))
        let fcResult = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            fcResult = functions[i](fcResult);
        }
        return fcResult;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
