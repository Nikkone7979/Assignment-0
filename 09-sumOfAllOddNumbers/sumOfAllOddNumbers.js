function sumOfAllOddNumbers(nums) {
    var x = 0;
  for (var i = 0; i < nums.length; i++){
      if ((nums[i] % 2) !== 0){
          x++;
      } 
  }
    return x;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;