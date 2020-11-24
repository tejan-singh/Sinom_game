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
}