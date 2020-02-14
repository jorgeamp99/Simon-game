
// for (var i = 0; i < 7; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//       var buttonLetter = this.innerHTML;
//
//     buttonAnimation(buttonLetter);
//     drumKitSounds(buttonLetter);
//
//     }
//   );
// }
document.addEventListener("keydown", function(event){

  // buttonAnimation(event.key);
  drumKitSounds(event.key);

});
function drumKitSounds(key){
switch (key) {
  case "w":
    var tom1 = new Audio("sounds0/tom-1.mp3");
    tom1.play();
    break;
  case "a":
    var tom2 = new Audio("sounds0/tom-2.mp3");
    tom2.play();
    break;
  case "s":
    var tom3 = new Audio("sounds0/tom-3.mp3");
    tom3.play();
    break;
  case "d":
    var tom4 = new Audio("sounds0/tom-4.mp3");
    tom4.play();
    break;
  case "j":
    var snare = new Audio("sounds0/snare.mp3");
    snare.play();
    break;
  case "k":
    var crash = new Audio("sounds0/crash.mp3");
    crash.play();
    break;
  case "l":
    var kick = new Audio("sounds0/kick-bass.mp3");
    kick.play();
    break;
  default:
}
}

// function buttonAnimation(currentKey){
//   var activedButton = document.querySelector("." + currentKey);
//   activedButton.classList.add("pressed");
//   setTimeout(function(){activedButton.classList.remove("pressed");}, 100);
// }
