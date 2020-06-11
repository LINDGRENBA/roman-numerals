//business logic
let passedInput = function(userNumber) {
  if(userNumber === 1) {
    return "I";
  } else if(userNumber === 5) {
    return "V";
  } else if(userNumber === 10) {
    return "X";
  } else if(userNumber === 50) {
    return "L";
  } else if(userNumber === 100) {
    return "C";
  } else if(userNumber === 500) {
    return "D";
  } else if(userNumber === 1000) {
    return "M"
  } else {
    return userNumber
  }
};





// user interface logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    let userInput = parseInt($("input#number").val());
    let result = passedInput(userInput);
    $("#output").text(result);
  });
});