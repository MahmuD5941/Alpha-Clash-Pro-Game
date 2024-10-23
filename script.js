// function play(){
//     //hidden home section...
//      const homeSection = document.getElementById('Home-Section');
//      homeSection.classList.add('hidden');
//     //open playground section...
//     const playGround = document.getElementById('Play-Ground');
//     playGround.classList.remove('hidden');
// }



function play(){
    hideElementById('Home-Section');
    showElementById('Play-Ground');
    getRandomAlphabet()
}
//hide element
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
//show element
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
//get random alphabet
function getRandomAlphabet(){
    const getAlphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = getAlphabetString.split('');
    //get index of alphabets
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber); 
    //add index to the alphabet like array..
    const alphabet = alphabets[index];
    //add alphabet as inner text to the html element
    const ElementId = document.getElementById('Current-Alphabet');
    ElementId.innerText = alphabet;
 }
