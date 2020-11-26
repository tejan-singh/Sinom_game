buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []

function nextSequence(){
  randomNumber = Math.random()
  randomNumber = Math.round(randomNumber * 3)
  console.log(randomNumber)

  randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  console.log(gamePattern)

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100)

  var sound = new Audio("sounds/" + randomChosenColour + ".mp3")
  sound.play()

  return randomChosenColour
}

  $(".btn").on("click", function(){userChosenColour = this.id; console.log(userChosenColour); userClickedPattern.push(userChosenColour); console.log(userClickedPattern)})
