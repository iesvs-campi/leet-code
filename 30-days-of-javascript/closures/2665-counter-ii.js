/**
 * leetcode: jesus_campos
 * problem: counter-ii
 * url: https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy 
 */

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let counter = init;
    return{
        increment: () => { return counter+=1; },
        decrement: () => { return counter-=1; },
        reset: () => { return counter=init; }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
