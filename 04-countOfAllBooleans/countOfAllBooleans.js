function countOfAllBooleans(arr) {
    var x = 0;
  for (var i = 0; i < arr.length; i++){
      if (arr[i] === true){
          x++;
      } 
        if (arr[i] === false){
          x++;
      } 
      
  }
  return x;
}

countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]);

// Do not edit this line;