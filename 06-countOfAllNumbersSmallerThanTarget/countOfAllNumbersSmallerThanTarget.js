function countOfAllNumbersSmallerThanTarget(nums, target){
    var x = 0;
  for (var i = 0; i < target; i++){
      if (nums[i] < target){
          x++;
      }
      
  }
  return x;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;