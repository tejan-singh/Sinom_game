buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []

game_start = 0
level = 0

function nextSequence() {
  //to empty the array after checkAnswer() is called
  userClickedPattern = []
  
  playSound()
  animatePress()

  level = level + 1
  $("h1").html("Level " + level)
  randomNumber = Math.random()
  randomNumber = Math.round(randomNumber * 3)

  randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  console.log(gamePattern)

  var sound = new Audio("sounds/" + randomChosenColour + ".mp3")
  sound.play()

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100)

}

function playSound() {
  $(".btn").on("click", function () {
    userChosenColour = this.id
    var sound = new Audio("sounds/" + userChosenColour + ".mp3")
    sound.play()
  })

}

function animatePress() {
  $(".btn").on("click", function () {
    pressed = this.id

    $("#" + pressed).addClass("pressed")

    setTimeout(function () {
      $("#" + pressed).removeClass("pressed")
    }, 100);

  })
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("Match")

    if(gamePattern.length === userClickedPattern.length){
      setTimeout(function () {
        nextSequence()
      }, 1000);
    }
  }

  else{
    console.log("wrong")
  }
}


$(document).keypress(function (press) {
  if (game_start === 0) {
    $("h1").html("Level 0")
    nextSequence()
    game_start = 1
  }
})

$(".btn").on("click", function () {
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern)

  checkAnswer(userClickedPattern.length - 1)
  
})