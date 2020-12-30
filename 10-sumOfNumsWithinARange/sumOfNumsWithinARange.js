function sumOfNumsWithinARange(nums, start, end) {
 	 var x = 0;
  for(var i = 0; i < nums.length; i++) {

    if(nums[i] <= end && nums[i] >= start) {

      x++;
    }
  }

  return x;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;