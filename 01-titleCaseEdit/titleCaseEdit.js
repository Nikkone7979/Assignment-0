function titleCaseEdit(title) {
  // Insert code here;
    var x = title.split(" ");
    for (var i = 0; i < x.length, i++ ) {
        x[i] = x[i].charAt(0).toUpperCase() + x[i].substr(1);
    }
    return x.join(" ");
    //Notes:
    //This function splits the string object passed into it by calling the .split member function,
    //It then goes through the characters at position 0 of each string and calls the toUpperCase() member function to capitilize them.
}

// Do not edit this line;
module.exports = titleCaseEdit;