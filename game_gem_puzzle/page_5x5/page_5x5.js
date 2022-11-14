let cellPosition ;

function setVariable() {
    if (window.innerWidth >= 1280) {
        cellPosition = 150;
    } else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        cellPosition = 100;
    } else if(window.innerWidth < 768) {
        cellPosition = 50;
    }
}
setVariable();

let gameSize = '5x5';

let fieldCells = [];
let arrayForCheck = [];

function fillFullArray(array) {
    for (let i = 1; i < 25; i++ ) {
        let object = {
            value: `${i}`,
            top: '',
            left: ''
        }
        array.push(object);
    }
}

fillFullArray(fieldCells);
fillFullArray(arrayForCheck);

const divField = document.createElement('div');
divField.classList.add("game_field");

function renderElements (array1, array2) {
    for ( let i = 0; i <array1.length; i++) {
        let element = document.createElement('div');
        element.classList.add('field_cell');
        element.setAttribute('id', `${array1[i].value}`);
        element.innerHTML = `${array1[i].value}`;

        let top;

        let left;
        if (i % 5 === 0) {
            left = 0;
        } else if (i % 5 === 1) {
            left = cellPosition;
        } else if (i % 5 === 2) {
            left = 2 * cellPosition;
        } else if (i % 5 === 3) {
            left = 3 * cellPosition;
        }  else if (i % 5 === 4) {
            left = 4 * cellPosition;
        }

        if(i<5) {
            top = 0;
        } else if( i>=5 && i<10) {
            top = cellPosition;
        } else if (i>=10 && i<15) {
            top = 2 * cellPosition;
        } else if (i>=15 && i<20) {
            top = 3 * cellPosition;
        } else if (i>=20 && i<25) {
            top = 4 * cellPosition;
        }

        element.style.left = `${left}px`;
        array1[i].left = left;
        element.style.top = `${top}px`;
        array1[i].top = top;

        if (array2) {
            array2[i].left = left;
            array2[i].top = top;
        }

        divField.appendChild(element);
    }
}

renderElements(fieldCells, arrayForCheck);
document.body.appendChild(divField);


//render div with link to another game sizes
setTimeout( () => {
    link_3x3.setAttribute('href', '../page_3x3/page_3x3.html');
    link_4x4.setAttribute('href', '../index.html');
    link_5x5.setAttribute('href', 'page_5x5.html');
    link_6x6.setAttribute('href', '../page_6x6/page_6x6.html');
    link_7x7.setAttribute('href', '../page_7x7/page_7x7.html');
    link_8x8.setAttribute('href', '../page_8x8/page_8x8.html');
}, 30 );
