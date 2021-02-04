// main.js
//const input = document.querySelector('input')
var element = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var hornbtn = document.getElementById("honk-btn");
var hornSound = document.getElementById("horn-sound");
var image = document.getElementById("volume-image");
element.addEventListener("input", updateSlider);
slider.addEventListener("input", updateNumber);
hornbtn.addEventListener("click", playSound);


function updateSlider() {
   // alert("it moved!!!");
   slider.value = element.value;
   hornSound.volume = slider.value/100;
   if (slider.value < 67) {
       image.src = "./assets/media/icons/volume-level-2.svg";
   }
     if (slider.value < 34) {
        image.src = "./assets/media/icons/volume-level-1.svg";
   }
   if (slider.value == 0) {
    image.src = "./assets/media/icons/volume-level-0.svg";
    }
   // element.value = slider.value;
}
function updateNumber() {
    element.value = slider.value;
    hornSound.volume = element.value/100;

}
function playSound() {
    hornSound.play();
    alert(hornSound.volume);
}


// TODO
