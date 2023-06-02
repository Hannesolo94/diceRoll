// const dice1 = 6;
// const dice2 = 6;

// function diceRoll()
// {
//     const roll1 = Math.floor(Math.random() * dice1) - 1;
//     const roll2 = Math.floor(Math.random() * dice2) + 1;
//     console.log(`Roll 1: ${roll1}`);
//     console.log(`Roll 2: ${roll2}`);
//     console.log(`your first dice landed on ${roll1} and your second dice landed on ${roll2}`);
// };

// diceRoll(1, 2)



// -> Kenneth Fisher on discord showed some code on making a loop with input to make a dice roll game more interactive

// const readline = require('readline');

// const dice = 6;
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function diceRoll() {
//   const roll1 = Math.floor(Math.random() * dice) + 1;
//   const roll2 = Math.floor(Math.random() * dice) + 1;
//   console.log(`Roll 1: ${roll1}`);
//   console.log(`Roll 2: ${roll2}`);
//   console.log(`Your first dice landed on ${roll1} and your second dice landed on ${roll2}`);
//   console.log('Press R to roll again or Q to quit.');
// }

// function menu() {
//     rl.question('Press R to roll or Q to quit: ', (answer) => {
//     if (answer.toUpperCase() === 'R') {
//       diceRoll();
//       menu();
//     } else if (answer.toUpperCase() === 'Q') {
//       rl.close();
//     } else {
//       console.log('Invalid input. Press R to roll again or Q to quit.');
//       menu();
//     }
//   });
// }

// menu();

// Kenneth's Notes:

// once you get a little better you could add a roll dice
// function where you could press the R key to roll.and maybe
// the Q key to quit.kind of make it into a little game with a menu


// this is just some added functionality to your code to where it is
// caught in a loop and you can roll or quit and you only have to start the game once.

// if you have the right compiler. you could compile the file to be a .exe
// file and then just double click on it to run it.

// another idea is to add 3 more dice and you can make a yahtzee type game.



// practice/challenge make Kenneth's code work in browser

let isStarted = prompt("Welcome to my little dice game! Please press 'R' to roll or 'Q' quite");

const dice = 6;

while (!isStarted)
{
        isStarted = prompt("Either press 'R' or 'Q' to Roll or quite");
}

function diceRoll() 
{
  const roll1 = Math.floor(Math.random() * dice) + 1;
  const roll2 = Math.floor(Math.random() * dice) + 1;
  console.log(`Roll 1: ${roll1}`);
  console.log(`Roll 2: ${roll2}`);
  console.log(`Your first dice landed on ${roll1} and your second dice landed on ${roll2}`);
  
}

while (isStarted)
{
    if (isStarted.toUpperCase() === 'R')
    {
        diceRoll();
        isStarted = prompt("Either press 'R' or 'Q' to Roll again or quite");
    }
    else if (isStarted.toUpperCase() === 'Q')
    {
        console.log('Goodbye!');
        break;
    }
    else
    {
        isStarted = prompt("Either press 'R' or 'Q' to Roll or quite");
    };
};

// if (isStarted === 'Q')
// {
//     console.log("OK, Quiting! Thanks for playing!")
// }
// else
// {
//       console.log(`Roll 1: ${roll1}`);
//       console.log(`Roll 2: ${roll2}`);
//       console.log(`Your first dice landed on ${roll1} and your second dice landed on ${roll2}`);
// };
