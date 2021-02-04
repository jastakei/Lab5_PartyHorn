// main.js
//const input = document.querySelector('input')
var element = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var hornbtn = document.getElementById("honk-btn");
var hornSound = document.getElementById("horn-sound");
element.addEventListener("input", updateSlider);
slider.addEventListener("input", updateNumber);
hornbtn.addEventListener("click", playSound);


function updateSlider() {
   // alert("it moved!!!");
   slider.value = element.value;
   // element.value = slider.value;
}
function updateNumber() {
    element.value = slider.value;
}
function playSound() {
    hornSound.play();
}


// TODO
