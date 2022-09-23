var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('choices');
});

/* GET turn */
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choice;
  let pcChoice = getPcChoice(['rock', 'paper', 'scissors']);
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('result', {
    playerChoice: playerChoice,
    pcChoice: pcChoice,
    winner: winner,
  });
})

module.exports = router;

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getPcChoice(options) {
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return 'Draw :/';
  }
  if (playerChoice === 'rock') {
    if (pcChoice === 'paper') {
      return 'PC Wins!';
    }
    if (pcChoice === 'scissors') {
      return 'Player Wins!';
    }
  }
  if (playerChoice === 'paper') {
    if (pcChoice === 'rock') {
      return 'Player Wins!';
    }
    if (pcChoice === 'scissors') {
      return 'PC Wins!';
    }
  }
  if (playerChoice === 'scissors') {
    if (pcChoice === 'rock') {
      return 'PC Wins!';
    }
    if (pcChoice === 'paper') {
      return 'Player Wins!';
    }
  }
  return 'invalid';
}