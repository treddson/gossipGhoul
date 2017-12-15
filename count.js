var sortArr = function(nums) {

  return nums.map(function(sortNum) {
    return Math.min.apply(null, sortNum);
  })
  
}
  console.log(sortArr([ [3,31,23,12], [41,26,5,6], [29,8,17,4] ]));

  module.exports = sortArr;
