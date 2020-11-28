buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []

game_start = 0
level = 0

function nextSequence() {
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
    $("#" + userChosenColour).fadeOut(100).fadeIn(100)
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

function checkAnswer(gamePattern, userClickedPattern) {
  result = JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)

  if (result) {
    console.log("Match")
    userClickedPattern.length = 0;

    setTimeout(function () {
      nextSequence()
    }, 1000);
    
  } else {
    console.log("No match")
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
  checkAnswer(gamePattern, userClickedPattern)
})




