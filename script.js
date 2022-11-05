


// getComputerChoice()
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Papper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomChoice]
}



function getResult(playerChoice, computerChoice) {

    // return the result of score based on if you won, drew or loss
    let score;

    // All stituation where human draw, set 'score' to 0
    if (playerChoice == computerChoice){
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    } else{
        score = -1
    }

    // return score
    return score
}


function onClickRPS(playerChoice) {

    console.log({playerChoice})

    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    
    const score = getResult(playerChoice, computerChoice)
    console.log ({score})
}

function playGame() {
    // use querySelector to select all RPS Buttons
    let rpsButtons = document.querySelectorAll('.rpsButton')
  
    // loop through the buttons using a forEach loop
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  
    // // Add a click listener to the end game button that runs the endGame() function on click
    // let endGameButton = document.getElementById('endGameButton')
    // endGameButton.onclick = () => endGame()
  }
  

playGame()



