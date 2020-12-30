class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {

    var bottom = 0;

    var middle = 0;

    var top = nums.length;


    while(bottom !== top) {

      middle = Math.floor((bottom + top) / (2));

      if (nums[middle] === target) {
        return true;
      }

      else if (nums[middle] >== target) {
        top = (middle - 1);
      }

      else if {
        bottom = (middle + 1);
      }
    }

  return false;
  }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;