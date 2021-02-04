// main.js
const input = document.querySelector('input')
var element = document.getElementById('volume-number');
var slider = document.getElementById('volume-slider')
input.addEventListener('input', updateValue);

function updateValue() {
    element.value = slider.value;
}


// TODO
