buttonColours = ["red", "blue", "green", "yellow"]
gamePattern = []
userClickedPattern = []

game_start = 0


$(document).keypress(function(press){
  if(game_start === 0){
    $("h1").html("Level 0")
    nextSequence()
    game_start = 1
  }
})

function nextSequence(){

  randomNumber = Math.random()
  randomNumber = Math.round(randomNumber * 3)
  console.log(randomNumber)

  randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  console.log(gamePattern)

  var sound = new Audio("sounds/" + randomChosenColour + ".mp3")
  sound.play()

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100)

}

  //$(".btn").on("click", function(){userChosenColour = this.id; console.log(userChosenColour); userClickedPattern.push(userChosenColour); console.log(userClickedPattern)})

  
  function playSound(){
    $(".btn").on("click", function(){
      userChosenColour = this.id 
      var sound = new Audio("sounds/" + userChosenColour + ".mp3")
      sound.play()
      $("#" + userChosenColour).fadeOut(100).fadeIn(100)
    }
    )

  }

  function animatePress(){
    $(".btn").on("click", function(){
      pressed = this.id
      
      $("#" + pressed).addClass("pressed")
      
      setTimeout(function() {
      $("#" + pressed).removeClass("pressed")
      }, 100);
      
    })
  }

