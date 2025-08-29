/**
 * leetcode: jesus_campos
 * problem: to-be-or-not-to-be
 * url: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
 * difficulty: easy 
 */

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
    toBe: (val2) => {
        if(val===val2){ 
            return true;
            }else {
                throw new Error("Not Equal");
            }
  },notToBe: (val2) => {
        if(val!==val2){
            return true;
        }else {
            throw new Error("Equal");
        }
    }
  }  
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
