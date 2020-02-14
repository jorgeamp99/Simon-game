var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var level = 0;
var levelIndexControl = 0;
var started = false;

function startOver(){
  gamePattern = [];
  level = 0;
  started = false;
}


function nextSequence() {
  level++;
  userClickedPattern = [];
  $("h1").text("Level " + level);
  randomNumber = Math.floor((Math.random() * 4));
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    levelIndexControl++;
    if (gamePattern.length === userClickedPattern.length) {


      levelIndexControl = 0;
      setTimeout(function() {
        nextSequence();
      }, 1000);


    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);

    startOver();
    
  }
}




$(".btn").click(function() {
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(levelIndexControl);
});


$("body").keydown(function(event) {
  if (started == false) {
    started = true;
    $("h1").text("Level 0");
    nextSequence();
    // var sound = new Audio("sounds0/tom-1.mp3");
    // sound.play();
  }
});
