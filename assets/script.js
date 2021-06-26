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




button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("yes");


})

var user = [
    {
        userInput: textA9.value.trim(),
        title: "",
        dataHour: 9,
    },
    {
        userInput: textA10.value.trim(),
        title: "",
    },
    {
        userInput: textA11.value.trim(),
        title: "",
    },
    {
        userInput: textA12.value.trim(),
        title: "",
    },
    {
        userInput: textA13.value.trim(),
        title: "",
    },
    {
        userInput: textA14.value.trim(),
        title: "",
    },
    {
        userInput: textA15.value.trim(),
        title: "",
    },
    {
        userInput: textA16.value.trim(),
        title: "",
    },
]

var num = 0;

function setSched() {

    for (var i = 0; i < user.length; i++) {
        // console.log(i);
        // // if (i < current) {
        // //     $('textarea').addClass('past');
        // // }
        // // else if (i > current) {
        // //     $('textarea').addClass('future');
        // // }
         

    }

}


localStorage.setItem(user.input, JSON.stringify(user));

console.log(current);

$(".form-control").text(user.userInput);
setSched();



// $('textarea').addClass('present');

$('textarea').addClass('past');

// $('textarea').addClass('present');

// $('textarea').addClass('future');

if (user.dataHour > current){
    $('textarea').addClass('present');
}
console.log(user.dataHour);