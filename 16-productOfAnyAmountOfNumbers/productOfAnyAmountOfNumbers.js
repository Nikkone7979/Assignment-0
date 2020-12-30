function productOfAnyAmountOfNumbers(...args) {
  var x = 0;
  
  x = 1;
  for (var i = 0; i < args.length; i++) {

    x *= args[i];
  }

  return x
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;