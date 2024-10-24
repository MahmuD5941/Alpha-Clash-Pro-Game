// function play(){
//     //hidden home section...
//      const homeSection = document.getElementById('Home-Section');
//      homeSection.classList.add('hidden');
//     //open playground section...
//     const playGround = document.getElementById('Play-Ground');
//     playGround.classList.remove('hidden');
// }



function play() {
    hideElementById('Home-Section');
    hideElementById('Final-Score');
    showElementById('Play-Ground');
    getRandomAlphabet('Current-Alphabet');
    //setBackgroundColor(alphabet);
}

//hide element
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
//show element
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//get random alphabet
function getRandomAlphabet(elementId) {
    const getAlphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = getAlphabetString.split('');
    //get index of alphabets
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    //add index to the alphabet like array..
    const alphabet = alphabets[index];
    //add alphabet as inner text to the html element
    const ElementId = document.getElementById(elementId);
    ElementId.innerText = alphabet;
    return alphabet;
}

//set background color to the keyboard.....
//  function setBackgroundColor(elementId){
//     const element = document.getElementById(elementId);
//     element.classList.add('bg-orange-400'); //not working !!!! so sad.....!
//  }

//capture keyboard press by event handler...
document.addEventListener('keyup', function (event) {
    const playerPressed = event.key;
    //game over by escape key pressed...
    if(playerPressed==='Escape'){
        gameOver();
    }
    //expected key....
    const currentAlphabetElement = document.getElementById('Current-Alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //check right or wrong keypressed...
    if (playerPressed === expectedAlphabet) {
        play()
        //update and show the score to the score button...
        const currentScoreElement = document.getElementById('Current-Score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        //increase the score by 1...
        const newScore = currentScore + 1;
        //show the updated value to the display....
        currentScoreElement.innerText = newScore
    }
    else {
        //decrease current life and show it to the life button....
        const currentLifeElement = document.getElementById('Current-Life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        //decrease the current life ...
        const newLife = currentLife - 1;
        //show the new life ...
        currentLifeElement.innerText = newLife;
        //gave over ...
        if (newLife === 0) {
            gameOver()
        }

    }
})
function gameOver() {
    hideElementById('Play-Ground');
    showElementById('Final-Score');

}
