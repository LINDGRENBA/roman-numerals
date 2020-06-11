//business logic
let passedInput = function(userNumber) {
  return userNumber;
};





// user interface logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    let userInput = $("input#number").val();
    let result = passedInput(userInput);
    $("#output").text(result);
  });
});