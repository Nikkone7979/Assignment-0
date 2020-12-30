function countOfAllBooleansAndStrings(arr) {
    var x = 0;
  for (var i = 0; i < arr.length; i++){
      if (arr[i] === true){
          x++;
      } 
      if (arr[i] === false){
          x++;
      }
      if (typepof(arr[i]) === "string"){
	  x++;
      }  
      
  }
  return x;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;