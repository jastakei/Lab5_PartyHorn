// main.js
//const input = document.querySelector('input')
var element = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
element.addEventListener("input", updateValue);

function updateValue() {
    alert("it moved!!!")
    element.value = slider.value;
}


// TODO
