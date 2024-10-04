 let currentPlayer='X';//initializing current player as x
 const boxes=document.querySelectorAll('.box');//selecting all elements of box
 const message=document.getElementById('status'); //displays game status
 const restartButton=document.getElementById('restart'); //restart button 

 startGame(); //call the function

 restartButton.onclick=startGame; //restart button click event

 function startGame(){ //to start  game
   currentPlayer='X';
   message.textContent=''; //clear status message
 

 for (let box of boxes){
    box.textContent=''; //clears content of each box
    box.style.pointerEvents='auto';
    box.onclick=handleClick;
 }
}
function handleClick() { //handle click event
  if(this.textContent===''){ //checks if box is empty
    this.textContent=currentPlayer; //add content of current player
  
if(checkWinner()) { //check if won
  message.textContent=currentPlayer +'Wins!!';
  disableClicks();
}

else if(isDraw()) { //checks if game is a draw
  message.textContent="It's a Draw!";
  disableClicks();
}
else {
  currentPlayer=(currentPlayer==='X') ? 'O':'X';// Switch to the other player
}
  }
}
function checkWinner(){ //checks winner
  const winPatterns=[ //possible winning patterns
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6] 
    ];
    for(let pattern of winPatterns){ //checks if all patterns are filled
      if(
        boxes[pattern[0]].textContent===currentPlayer &&
        boxes[pattern[1]].textContent===currentPlayer &&
        boxes[pattern[2]].textContent===currentPlayer
      ){
          return true; //returns if winning pattern is found
    }
}
return false;//else false
}

function isDraw() { //checks if game is a draw
  for (let box of boxes) {
    if (box.textContent === '') {
      return false; 
}
  }
  return true;
}
function disableClicks() { 
  for (let box of boxes) {
    box.style.pointerEvents = 'none';
  }
}
 
   
   