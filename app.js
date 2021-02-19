/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let globalScore, player;
globalScore=[0,0];
activePlayer = 0;

function newGame(){
    location.reload() ;
};


document.querySelector('.dice').style.display= 'none';
document.querySelector('#score-0').textContent= 0;
document.querySelector('#score-1').textContent= 0;
document.querySelector('#current-0').textContent= 0;
document.querySelector('#current-1').textContent= 0;
document.querySelector('.btn-new').addEventListener('click', newGame);

roundScore = 0;


document.querySelector('.btn-roll').addEventListener('click', function buttonRoll(){
    
    //random dice value
    dice= Math.floor(Math.random()*6 + 1);

    //displaying dice value
    let diceSelector =document.querySelector('.dice');
    diceSelector.style.display= 'block';
    diceSelector.src= 'dice-' + dice + '.png';

    if (dice !== 1){
    roundScore=roundScore+dice;
    document.querySelector('#current-' + activePlayer).innerHTML=roundScore;
    console.log(roundScore);}
    else {
       // roundScore = 0;
       nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
   
    globalScore[activePlayer]+=roundScore;
    document.querySelector('#score-' + activePlayer).textContent = globalScore[activePlayer];

    let winner =  globalScore[activePlayer];
    if  (winner >= 100){
        document.querySelector('#name-' + activePlayer).textContent ='winner';
        document.querySelector('.btn-roll').style.display='none';
        document.querySelector('.btn-hold').style.display='none';
        
    } else {
    nextPlayer();
    };
    

});

function nextPlayer(){
    roundScore = 0;
    activePlayer === 0? activePlayer = 1 : activePlayer = 0; 
    document.querySelector('#current-0').innerHTML=0; 
    document.querySelector('#current-1').innerHTML=0; 


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display="none";
};