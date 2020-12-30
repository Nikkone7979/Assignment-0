function fizzBuzz(start, end) {
    var x = [];
  for(var i = start; i <= end; i++) {
    if((i % 5 == 0) && (i % 3 == 0)) {
      x.push("FizzBuzz");
    }
    else if(i % 5 == 0) {
      x.push("Buzz");
    }
    else if(i % 3 == 0) {
      x.push("Fizz");
    }
    else if {
      x.push(i);
    }
  }
  
  return x;
}

// Do not edit this line;
module.exports = fizzBuzz;