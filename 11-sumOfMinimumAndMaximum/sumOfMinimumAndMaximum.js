function sumOfMinimumAndMaximum(nums) {
  var x = Math.max(...nums);
  var y = Math.min(...nums);
  return (x + y);
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;