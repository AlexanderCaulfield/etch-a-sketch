const createGridBtn = document.querySelector('#create-grid-btn');
const board = document.querySelector('#board');
const colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];

createGridBtn.addEventListener('click', () => {
    board.innerHTML = '';
    let size = +prompt('Type in the size of the grid:');
    if (size < 2 || size > 40) {
        alert('We advice to type in the number between 2 and 40 (inclusive)');
        return;
    }
    
    const squareSize = (500 - 2 * 2 * size) / size;

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            setColor(square);
        });

        square.addEventListener('mouseleave', () => {
            removeColor(square);
        });

        board.appendChild(square);
    }
});

function setColor (square) {
    const color = getRandomColor();
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 7px ${color}`;
};

function removeColor (square) {
    square.style.backgroundColor = '#1d1d1d';
    square.style.boxShadow = '0 0 2px #000';
};

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
};