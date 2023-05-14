const table = document.getElementById('table');
const tableCont = document.getElementById("table-container");
const submit = document.getElementById('submit');
const generateButton = document.getElementById('movie-generator');
let rowNum = 1;
let playersArray = [];


const addMovie = () => {
    
    const userName = document.getElementById('name').value;
    const userMovie = document.getElementById('movie').value;
    table.style.visibility = 'visible';
    tableCont.style.visibility = 'visible';


    if (userName == '' || userMovie == '') {
    
        throw Error('Please Enter a Valid Name and Movie');
    
    } else {
    
    let row = table.insertRow(-1);
    let newNum = row.insertCell(0);
    let newName = row.insertCell(1);
    let newMovie = row.insertCell(2);

    newNum.innerHTML = rowNum;
    newName.innerHTML = userName;
    newMovie.innerHTML = userMovie;
    playersArray.push({newName, newMovie});

    rowNum++;

    }
    
}

submit.addEventListener('click', addMovie);

generateButton.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * playersArray.length);
    let winnersArrayName = [];
    let winnersArrayMovie = [];
    //let generate = document.getElementById('generator-button');
    let winnerHeader = document.getElementById('winner-header');
    let winner = document.getElementById('winner');

    winnerHeader.style.visibility = 'visible';
    winner.style.visibility = 'visible';

    for (let i = 0; i < playersArray.length; i++) {
        if (randNum === i) {
            //console.log(playersArray[i].newName.textContent);
            winnersArrayName = playersArray[i].newName.textContent;
            winnersArrayMovie = playersArray[i].newMovie.textContent;
            //console.log(winnersArrayName + winnersArrayMovie);

        }
    }
    
    setTimeout(() => {
        winner.innerHTML = winnersArrayName + ' with ' + winnersArrayMovie + '!';
    }, 1000);

});

const makeGenerate = () => {
    let generate = document.getElementById('generator-button');

    if (playersArray.length > 0) {
        generate.style.visibility = 'visible';
    }
}

setInterval(makeGenerate);