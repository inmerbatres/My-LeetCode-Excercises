/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let set = new Set();

    for (let num of nums){
        if (set.has(num)){
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return Array.from(set)[0];
};