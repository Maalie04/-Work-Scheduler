
var current = moment().format('LT');
// console.log(timeDisplayEl);

var input = document.querySelector(".form-control");
var inputText = document.querySelector("#input-value");
var button = document.querySelector(".btn");
var time = $(this).parent().attr('id');

button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("yes");
    localStorage.setItem(time, input);

});




