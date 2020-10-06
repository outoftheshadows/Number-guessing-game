let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
function generateTarget()
{
  return Math.floor(Math.random()*10);
}
function compareGuesses(userguess,computerguess,target)
{
  if(Math.abs(userguess-target)<=Math.abs(computerguess-target))
    return true;
  else
    return false;
}
function updateScore(value) 
{if(value==='human')
  humanScore +=1;
 else
   computerScore +=1;
  
}
function advanceRound()
{
  currentRoundNumber+=1;
}


