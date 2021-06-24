var timeDisplayEl = moment().subtract(4, 'hours').format('LT');
$("#time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().subtract(3, 'hours').format('LT');
$("#1time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().subtract(2, 'hours').format('LT');
$("#2time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().subtract(1, 'hours').format('LT');
$("#3time-display").text(timeDisplayEl);

var timeDisplayEl = moment().format('LT');
$("#4time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(1, 'hours').format('LT');
$("#5time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(2, 'hours').format('LT');
$("#6time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(3, 'hours').format('LT');
$("#7time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(4, 'hours').format('LT');
$("#8time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(5, 'hours').format('LT');
$("#9time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(6, 'hours').format('LT');
$("#10time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(7, 'hours').format('LT');
$("#11time-display").text(timeDisplayEl);

var timeDisplayEl =  moment().add(8, 'hours').format('LT');
$("#12time-display").text(timeDisplayEl);

var current = moment().format('LT');
console.log(timeDisplayEl);
var backgrd =  $("input.format-control");
var set = document.querySelector("input.bg-color");

function setColor(){
if (timeDisplayEl = moment().subtract(4, 'hours').format('LT') ){
    set.setAttribute("style","background-color: red;")
    console.log("sexy");
}
};
setColor();