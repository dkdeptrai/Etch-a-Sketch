const container = document.querySelector('.container');
let titles = Array.from(container.childNodes);

function changeColor(e) {
    if (e.type != 'mouseover') return;
    else {
        e.target.classList.add('colored');
        e.target.style.opacity -= '-0.1';
    }
}

function createGrid (size) {
    for (let i = 0; i < size; i++) {
        let title = document.createElement('div');
        title.style.width = `${100/Math.sqrt(size)}%`;
        title.setAttribute('draggable', 'false');
        title.classList.add('title');
        title.addEventListener('mousedown', changeColor);
        container.appendChild(title);
    }
}

let size = 1;
const createBtn = document.querySelector('.choose-size');
const clearBtn = document.queryCommandIndeterm('.clear');
createBtn.addEventListener('click', () => {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
    do {
        size = prompt(`Enter the number of pixels per side please!`, 64);
        if (size < 0 || size > 128) {
            alert('Please enter size between 1x1 and 64x64!');
            continue;
        }
    } while (size < 0 || size > 128);
    createGrid(Math.pow(size,2));
});

