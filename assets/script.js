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
var textA17 = document.querySelector("#input-17");

today = moment().format("dddd MMMM Do");
$("#currentDay").text(today);

console.log(today)

var input = document.querySelector(".form-control");
var inputText = document.querySelector("#input-value");
var button = document.querySelector(".btn");
var time = $(this).parent().attr('id');
var dataHour = 0;

var user = [
    {
        
        title: "",
        dataHour: 9,
    },
    {
       
        title: "",
        dataHour: 10,
    },
    {
       
        title: "",
        dataHour: 11,
    },
    {
        
        title: "",
        dataHour: 12,
    },
    {
        
        title: "",
        dataHour: 13,
    },
    {
        
        title: "",
        dataHour: 14,
    },
    {
        
        title: "",
        dataHour: 15,
    },
    {
        
        title: "",
        dataHour: 16,
    },
    {
    
        title: "",
        dataHour: 17,
    },
    
]

function setSched() {

    for (var i = 0; i < user.length; i++) {
        console.log();
        if (user[i].dataHour < current) {
            $('#input-' + user[i].dataHour).addClass('past');
            $('#input-' + user[i].dataHour).val(user[i].title);
            console.log(user[i].dataHour);
        } else if (user[i].dataHour === current) {
            $('#input-' + user[i].dataHour).addClass('present');

        } else {
            $('#input-' + user[i].dataHour).addClass('future');
        }

    }

}

var buttonClicked = function(event){
    var btnClicked = event.target.getAttribute('input');
}

button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("yes");
    localStorage.setItem("schedulerTimes", JSON.stringify(user));
 
})

    var parsedUser = JSON.parse(localStorage.getItem("schedulerTimes"))
    
    if (parsedUser) {
        user = parsedUser;
    }

    console.log(current);

    
    setSched();




