function pairSum(nums, target) {

  for (var i = 0; i < nums.length; i++){

    for (var i = 0; j < nums.length; j++){

      if(i !== j) {

        if((nums[j] + nums[i]) == target) {
          return true;
        }
      }
    }
  }
  
}

// Do not edit this line;
module.exports = pairSum;