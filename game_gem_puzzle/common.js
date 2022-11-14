let moveNumber = 0;
let gameFinished = false;
localStorage.clear();

let emptyCell = {
    value: 'emptyCell',
    top: '',
    left: '',
}

function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return (array);
}



//render div with buttons
let gameField = document.querySelector('.game_field');
const divButtons = document.createElement('div');
divButtons.classList.add('divButtons');

const buttonStart = document.createElement('button');
buttonStart.setAttribute('id', 'buttonStart');
buttonStart.innerHTML = 'Shuffle and start';
divButtons.append(buttonStart);

const buttonStop = document.createElement('button');
buttonStop.setAttribute('id', 'buttonStop');
buttonStop.innerHTML = "Stop";
divButtons.appendChild(buttonStop);

const buttonSave = document.createElement('button');
buttonSave.setAttribute('id', 'buttonSave');
buttonSave.innerHTML = 'Save';
divButtons.append(buttonSave);

const buttonResults = document.createElement('button');
buttonResults.setAttribute('id', 'buttonResults');
buttonResults.innerHTML = 'Results';
divButtons.append(buttonResults);

document.body.insertBefore(divButtons, gameField);


// render div with time
let gameInfo = document.createElement('div');
gameInfo.setAttribute('id', 'gameInfo');
let moves = document.createElement('div');
moves.setAttribute('id', 'moves');
moves.innerHTML = `Moves: ${moveNumber} `;
let timeDisplay = document.createElement('div');
timeDisplay.setAttribute('id', 'timeDisplay');
timeDisplay.innerHTML = 'Time: 00:00'
gameInfo.appendChild(moves);
gameInfo.appendChild(timeDisplay);
document.body.insertBefore(gameInfo, gameField);



//render div with links
const divLinks = document.createElement('div');
divLinks.classList.add('divLinks');

const link_3x3 = document.createElement('a');
link_3x3.classList.add('link-sizes');
link_3x3.innerHTML = '3x3';
divLinks.append(link_3x3);

const link_4x4 = document.createElement('a');
link_4x4.classList.add('link-sizes');
link_4x4.innerHTML = '4x4';
divLinks.append(link_4x4);

const link_5x5 = document.createElement('a');
link_5x5.classList.add('link-sizes');
link_5x5.innerHTML = '5x5';
divLinks.append(link_5x5);

const link_6x6 = document.createElement('a');
link_6x6.classList.add('link-sizes');
link_6x6.innerHTML = '6x6';
divLinks.append(link_6x6);

const link_7x7 = document.createElement('a');
link_7x7.classList.add('link-sizes');
link_7x7.innerHTML = '7x7';
divLinks.append(link_7x7);

const link_8x8 = document.createElement('a');
link_8x8.classList.add('link-sizes');
link_8x8.innerHTML = '8x8';
divLinks.append(link_8x8);

document.body.appendChild(divLinks);




//let moves = document.querySelector('#moves')
divField.addEventListener('click', function(event) {
    if (emptyCell.top === '') {
        alert('To make your first move, please press th button "start"');
    } else if(event.target.classList.contains('game_field')) {
        console.log('you need to click on cell with number');
    } else {
        moveCell(event);
        isVictory(fieldCells, arrayForCheck);
    }
})

function isVictory(currentArray, arrayForCheck ) {
    let finalNumber;
    for (let i = 0; i < currentArray.length; i++) {
        let index = currentArray.findIndex((item) => item.value === arrayForCheck[i].value);
        if (arrayForCheck[i].top !== currentArray[index].top || arrayForCheck[i].left !== currentArray[index].left) {
            console.log('not yet');
            return;
        } else {
            finalNumber = currentArray[index].value;
            finalNumber = Number(finalNumber);

        }

    }
    if (finalNumber === currentArray.length) {
        gameFinished = !gameFinished;
        alert ('you won');
        saveResult();

    }
}

function moveCell(event) {
    let currentCell = event.target;
    let index = fieldCells.findIndex(function (item) {
        return item.value === currentCell.id;
    })
    let currentCellTop = fieldCells[index].top;
    let currentCellLeft = fieldCells[index].left;
    let dif1 = currentCellTop - emptyCell.top;
    let dif2 = currentCellLeft - emptyCell.left;
    let sum = dif1 + dif2;

    if (cellPosition === 100 && sum !== 100 && sum !== -100) {
        alert('you can not move this number');
        console.log( currentCellTop , currentCellLeft)
        console.log(emptyCell.top, emptyCell.left)
    } else if (cellPosition === 150 && sum !== 150 && sum !== -150) {
        alert('you can not move this number');
    } else if(cellPosition === 50 && sum !== 50 && sum !== -50) {
        alert('you can not move this number');
    } else if (cellPosition === 130 && sum !== 130 && sum !== -130) {
        alert('you can not move this number');
    } else if (cellPosition === 80 && sum !== 80 && sum !== -80) {
        alert('you can not move this number');
    } else if (cellPosition === 30 && sum !== 30 && sum !== -30) {
        alert('you can not move this number');
    } else {
        event.target.style.top = `${emptyCell.top}px`;
        event.target.style.left = `${emptyCell.left}px`;

        fieldCells[index].top = emptyCell.top;
        fieldCells[index].left = emptyCell.left;

        emptyCell.top = currentCellTop;
        emptyCell.left = currentCellLeft;
        moveNumber++;
        moves.innerHTML = `Moves: ${moveNumber}`;
    }
}



function setEmptyCell() {
    if (gameSize === '3x3') {
        emptyCell.top = 2 * cellPosition;
        emptyCell.left = 2 * cellPosition;
    } else if (gameSize === '4x4') {
        emptyCell.top = 3 * cellPosition;
        emptyCell.left = 3 * cellPosition;
    }  else if (gameSize === '5x5') {
        emptyCell.top = 4 * cellPosition;
        emptyCell.left = 4 * cellPosition;
    }  else if (gameSize === '6x6') {
        emptyCell.top = 5 * cellPosition;
        emptyCell.left = 5 * cellPosition;
    }  else if (gameSize === '7x7') {
        emptyCell.top = 6 * cellPosition;
        emptyCell.left = 6 * cellPosition;
    }  else if (gameSize === '8x8') {
        emptyCell.top = 7 * cellPosition;
        emptyCell.left = 7 * cellPosition;
    }
}

//buttons
let buttons = document.querySelector('.divButtons');
buttons.addEventListener('click', function(event){
    if(event.target.id === 'buttonStart' ){
        let prevRender = document.querySelector('.game_field');
        prevRender.innerHTML = '';
        shuffleArray(fieldCells);
        renderElements(fieldCells);
        restartStopwatch()
        startStopwatch();
        setEmptyCell();

        moveNumber = 0;
        moves.innerHTML = `Moves: ${moveNumber}`;

        //checkIfWin()
    } else if(event.target.id === 'buttonStop' ){
        stopStopwatch();
    } else if(event.target.id === 'buttonSave'){
        saveResult();
    } else if(event.target.id === 'buttonResults' ){
        showResults();
    }

} )


//functions for timer
let stopwatch = document.querySelector('#timeDisplay')
let miliseconds = 0;
let timer;

function startStopwatch() {
    timer = setInterval(() => {
        miliseconds += 10;
        let dateTimer = new Date(miliseconds);
        stopwatch.innerHTML =
            (`Time: ${dateTimer.getUTCMinutes() > 9 ? dateTimer.getUTCMinutes(): '0'+dateTimer.getUTCMinutes()}  : 
        ${dateTimer.getUTCSeconds()>9?dateTimer.getUTCSeconds(): '0'+dateTimer.getUTCSeconds()}`);
    },10)
}

function stopStopwatch() {
    clearInterval(timer);
}

function restartStopwatch() {
    miliseconds = 0;
    stopwatch.innerHTML = 'Time: 00:00'
}


//function for saving results
function saveResult() {
    // console.log(localStorage.length);
    let time = document.querySelector('#timeDisplay').textContent;
    localStorage.setItem(`Game${localStorage.length+1}`, `Moves: ${moveNumber}, ${time}, Game finished: ${gameFinished}`);
    //console.log(localStorage);
    //console.log(time);
}

let divWithResults = document.createElement('div');
divWithResults.classList.add('game-results');
let resultsCLose = document.createElement('div');
resultsCLose.setAttribute('class', 'result-close');
let line1 = document.createElement('span');
let line2 = document.createElement('span');
line1.setAttribute('class', 'result-close-line');
line2.setAttribute('class', 'result-close-line');
resultsCLose.append(line1, line2);
divWithResults.append(resultsCLose);
document.body.append(divWithResults);

let resultTable = document.querySelector('.game-results');
let resultCloseButton = document.querySelector('.result-close');
// function shows results
function showResults() {
    if (localStorage.length === 0) {
        divWithResults.innerHTML = 'There are no results yet';
        divWithResults.append(resultsCLose);
    } else {
        resultTable.innerHTML = '';
        for (let i = 0; i <= localStorage.length; i++) {
            let parag = document.createElement('p');
            //let paragText =
            //console.log(paragText);
            parag.innerHTML = localStorage.getItem(`Game${i}`);
            divWithResults.append(parag, resultsCLose);
        }

        //divWithResults.append(resultsCLose);
        //document.body.append(divWithResults);
    }
    resultTable.style.display ='block';
    resultCloseButton.addEventListener('click', () =>    resultTable.style.display ='none');

}

