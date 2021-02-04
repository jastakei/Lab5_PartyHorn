// main.js
//const input = document.querySelector('input')
var element = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var hornbtn = document.getElementById("honk-btn");
var hornSound = document.getElementById("horn-sound");
hornbtn.volume = 1.00;
var image = document.getElementById("volume-image");
var mainImage = document.getElementById("sound-image");
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");

element.addEventListener("input", updateSlider);
slider.addEventListener("input", updateNumber);
hornbtn.addEventListener("click", playSound);
air.addEventListener("click", makeAir);
car.addEventListener("click", makeCar);
party.addEventListener("click", makeParty);



function updateSlider() {
   // alert("it moved!!!");
   slider.value = element.value;
   hornSound.volume = slider.value/100;
   if (slider.value < 67 && slider.value > 33) {
       image.src = "./assets/media/icons/volume-level-2.svg";
       hornbtn.disabled = false;

   }
    else if (slider.value < 34 && slider.value > 0) {
        image.src = "./assets/media/icons/volume-level-1.svg";
        hornbtn.disabled = false;
   }
   else if (slider.value == 0) {
        image.src = "./assets/media/icons/volume-level-0.svg";
        hornbtn.disabled = true;
    }
    else {
        image.src = "./assets/media/icons/volume-level-3.svg";
        hornbtn.disabled = false;
    }
}
function updateNumber() {
    element.value = slider.value;
    hornSound.volume = element.value/100;
    if (slider.value < 67 && slider.value > 33) {
        image.src = "./assets/media/icons/volume-level-2.svg";
        hornbtn.disabled = false;

    }
     else if (slider.value < 34 && slider.value > 0) {
         image.src = "./assets/media/icons/volume-level-1.svg";
         hornbtn.disabled = false;

    }
    else if (slider.value == 0) {
         image.src = "./assets/media/icons/volume-level-0.svg";
         hornbtn.disabled = true;

     }
     else {
         image.src = "./assets/media/icons/volume-level-3.svg";
         hornbtn.disabled = false;

     }
}
function makeAir() {
    mainImage.src = "./assets/media/images/air-horn.svg";
    hornSound.src = "./assets/media/audio/air-horn.mp3";
}
function makeCar() {
    mainImage.src = "./assets/media/images/car.svg";
    hornSound.src = "./assets/media/audio/car-horn.mp3";
}
function makeParty() {
    mainImage.src = "./assets/media/images/party-horn.svg";
    hornSound.src = "./assets/media/audio/party-horn.mp3";
}
function playSound() {
    hornSound.play();
    hornbtn.preventDefault();
}


// TODO
