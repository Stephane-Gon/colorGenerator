"use strict";
//* DOM elements and variables
const colorCells = document.getElementsByClassName('color-cell');
const cellsArray = Array.from(colorCells);
const button = document.querySelector('.my-btn');
const myColors = document.getElementsByClassName('my-color');
const myColorsArray = Array.from(myColors);
let copiedColor;
//* Function that sets a random color
const setInitialStyles = (elements) => {
    elements.forEach((el) => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        if (el.dataset.lock === "true")
            return; //! Checks if color is locked
        el.style.backgroundColor = `#${randomColor}`;
        el.children[0].innerHTML = `#${randomColor}`;
        el.dataset.color = randomColor;
    });
};
setInitialStyles(cellsArray);
//* Event Listener that locks color
cellsArray.forEach((el) => {
    el.children[1].addEventListener('click', () => {
        if (el.dataset.lock === "false") {
            el.children[1].classList.remove('fa-solid', 'fa-lock-open');
            el.children[1].classList.add('fa-solid', 'fa-lock');
            el.dataset.lock = "true";
        }
        else {
            el.children[1].classList.remove('fa-solid', 'fa-lock');
            el.children[1].classList.add('fa-solid', 'fa-lock-open');
            el.dataset.lock = "false";
        }
    });
});
//* Event listener so user can copy any color
cellsArray.forEach((el) => {
    el.children[0].addEventListener('click', () => {
        var _a;
        copiedColor = (_a = el.dataset.color) === null || _a === void 0 ? void 0 : _a.toString();
    });
});
//* Button that changes the colors by calling dunction
button.addEventListener('click', () => {
    setInitialStyles(cellsArray);
});
//* Event listener to paste copied color into one of the cells
myColorsArray.forEach((el) => {
    el.addEventListener('click', () => {
        if (copiedColor === undefined)
            return;
        el.style.backgroundColor = `#${copiedColor}`;
        el.dataset.color = copiedColor;
        el.children[0].innerHTML = `#${copiedColor}`;
    });
});
