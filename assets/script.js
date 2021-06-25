var current = moment().hours();
var today = document.querySelector("#currentDay");
var textA9 = document.querySelector("#input-9");
var textA10 = document.querySelector("#input-10");
var textA11 = document.querySelector("#input-11");
var textA12 = document.querySelector("#input-12");
var textA13 = document.querySelector("#input-13");
var textA14 = document.querySelector("#input-14");
var textA15 = document.querySelector("#input-15");
var textA16 = document.querySelector("#input-16");

today = moment().format("dddd MMMM Do");  
$("#currentDay").text(today);

console.log(today)

var input = document.querySelector(".form-control");
var inputText = document.querySelector("#input-value");
var button = document.querySelector(".btn");
var time = $(this).parent().attr('id');

if(current) {
    $('textarea').addClass('present');
}

button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("yes");
    
var user = {
    input: textA9.value.trim(),
    input: textA10.value.trim(),
    input: textA11.value.trim(),
    input: textA12.value.trim(),
    input: textA13.value.trim(),
    input: textA14.value.trim(),
    input: textA15.value.trim(),
    input: textA16.value.trim(),   
};


    localStorage.setItem(user, JSON.stringify(user));

});




