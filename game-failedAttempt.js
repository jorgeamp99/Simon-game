jQuery.fx.interval = 100;
var userChoice;
var answer = true;
var sequence = [];
var newStep;

function nextSequence() {
  randomNumber = Math.floor((Math.random() * 4) + 1);

  switch (randomNumber) {
    case 1:
      newStep = "green";

      break;
    case 2:
      newStep = "red";

      break;
    case 3:
      newStep = "yellow";

      break;
    case 4:
      newStep = "blue";

      break;
    default:

  }
  $("." + newStep).toggle(200).toggle(200);
  sequence.push(newStep);
}


function compareAnswer() {


      for (var i = 0; i < sequence.length; i++) {
        $(".btn").click(function(event) {
          userChoice = ($(this).attr("id"));
          alert(userChoice);

          if(userChoice !== sequence[i]){
            answer = false;
            i = sequence.length;
          }


      });}


}

$("body").keydown(function(event) {
  $("h1").text("Level 1");
alert(event.keydown);
  //   for (var n = 0; n <100; n++){
  //   nextSequence();
  // compareAnswer();
  //
  // }
});
