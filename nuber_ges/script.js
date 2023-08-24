// let randumNuber=parseInt(Math.random()*100+1)
const userInput =document.querySelector('#guessField');
const submit =document.querySelector('#subt');
const guessSlot =document.querySelector('.guesses');
const cpGasse =document.querySelector('.cpguesses');
const remaning =document.querySelector('.lastResult');
const lowHigh =document.querySelector('.lowOrHi');
const startOver =document.querySelector('.resultParas');

let p=document.createElement('p');

let preGuess=[];
let comGuess=[];
let numGuess=0;
let randumNuber=1;

submit.addEventListener('click',function(e) {
    let randNum=parseInt(Math.random()*100+1);
    randumNuber=randNum*randumNuber
    comGuess.push(randumNuber);
    console.log(randNum);
  
    
});


let playGame= true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        vaidateGuess(guess);

    });

}

function vaidateGuess(guess) {
if (isNaN(guess)) {
    alert('Please enter a valid number');
} else if (guess < 1) {
    alert('Please enter number grater then 1 ');
} else if (guess>100){
    alert('Please enter number lower then 100 ');
}else {preGuess.push(guess);
    console.log(numGuess);
    if (numGuess===10){
        displayGuess(guess);
        displayMassage(`game over random nuber ${randumNuber}`);
        endGame();  
    }else{
        displayGuess(guess);
        chakeGuess(guess);
        }
}
}


function chakeGuess(guess) {
    if (guess===randumNuber){
        displayMassage(`game over random nuber ${randumNuber}`);
        endGame();
    } else if(guess<randumNuber){
        displayMassage(`guess number is too low`);
    } else if(guess>randumNuber){
        displayMassage(`guess number is too high`);
    }
    randumNuber=1
}


function displayGuess(guess) {
    userInput.value ='';
    guessSlot.innerHTML +=`${guess}, `;
    cpGasse.innerHTML +=`${randumNuber}, `;

    numGuess++;
    remaning.innerHTML=`${11-numGuess}`;

    
    }
function displayMassage(massage) {
    lowHigh.innerHTML=`<h2>${massage}</h2>`;
}



function endGame(guess) {
userInput.value='';
userInput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML=`<h1><button><span id="newGame">Start New Game </span></button> </h1>`;
startOver.appendChild(p);
playGames=false;
newGame();
}

function newGame() {
const newGameButton = document.getElementById('newGame');
newGameButton.addEventListener('click',function(e) {
    // let randumNuber=parseInt(Math.random()*100+1);

    preGuess=[];
    comGuess=[]
    numGuess=1;
    randumNuber=1
    guessSlot.innerHTML ='';
    cpGasse.innerHTML='';
    remaning.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;

})
}
