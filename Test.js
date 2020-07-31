/* Game: Rock,Paper and Scissors on Javascript ES6*/
//------------------------------------------------------------------------------
/*Function for checking whether the user has given a valid input or not. And
  also announcing winner if user inputs a secret code. */

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else if (userInput==='bomb') {
    console.log('Great choice! You can destroy everything. You have won the game.');
  } else {
    console.log(`Your choice as ${userInput} is invalid`);
  }

}


//------------------------------------------------------------------------------
/*Function for converting random number chosen by computer into valid outputs.*/

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'paper';
      break;
    case 1:
      return 'scissors';
      break;
    default:
      return 'rock';
      break;
  }

}

//------------------------------------------------------------------------------
/*Function for compairing valid user input and a valid random choice of computer.
  and also for determining the winner of the game.  */

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log(`Match is tied as computer has also chosen ${userChoice}`);
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        console.log('Computer has won the game. Better luck next time.');
      } else {
        console.log('Hurray! You have won the game.');
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        console.log('Computer has won the game. Better luck next time.');
      } else {
        console.log('Hurray! You have won the game.');
      }

    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        console.log('Computer has won the game.Better luck next time.');
      } else {
        console.log('Hurray! You have won the game.');
      }
    }
  }
}

//------------------------------------------------------------------------------
/*Main function taking user inputs as arguments.*/

const playGame = (choice) => {
  let userChoice = getUserChoice(choice);
  let computerChoice = getComputerChoice();
  if (userChoice !== undefined) {
    console.log(`Your choice is: ${userChoice}`);
    console.log(`Computer has chosen: ${computerChoice}`);
  }
  determineWinner(userChoice, computerChoice);
}

//Calling the Main function.

playGame('Scissors');

//------------------------------------------------------------------------------
