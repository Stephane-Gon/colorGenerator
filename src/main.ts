//* DOM elements and variables
const colorCells = document.getElementsByClassName('color-cell') as HTMLCollectionOf<HTMLDivElement>
const cellsArray: HTMLDivElement[] = Array.from(colorCells)

const button = document.querySelector('.my-btn') as HTMLButtonElement

const myColors = document.getElementsByClassName('my-color') as HTMLCollectionOf<HTMLDivElement>
const myColorsArray: HTMLDivElement[] = Array.from(myColors)

let copiedColor: string | undefined


//* Function that sets a random color
const setInitialStyles = (elements: HTMLDivElement[]) => {
  elements.forEach((el: HTMLDivElement) => {
    const randomColor: string = Math.floor(Math.random()*16777215).toString(16);
      if (el.dataset.lock === "true") return //! Checks if color is locked
      el.style.backgroundColor = `#${randomColor}`
      el.children[0].innerHTML = `#${randomColor}`
      el.dataset.color = randomColor
  })
}
setInitialStyles(cellsArray)

//* Event Listener that locks color
cellsArray.forEach((el: HTMLDivElement) => {
  el.children[1].addEventListener('click', () => {

    if(el.dataset.lock === "false") {

      el.children[1].classList.remove('fa-solid', 'fa-lock-open')
      el.children[1].classList.add('fa-solid', 'fa-lock')
      el.dataset.lock = "true"

    } else {

      el.children[1].classList.remove('fa-solid', 'fa-lock')
      el.children[1].classList.add('fa-solid', 'fa-lock-open')
      el.dataset.lock = "false"

    }
  })
})

//* Event listener so user can copy any color
cellsArray.forEach((el: HTMLDivElement) => {
  el.children[0].addEventListener('click', () => {
    copiedColor = el.dataset.color?.toString()
  })
})

//* Button that changes the colors by calling dunction
button.addEventListener('click', () => {
  setInitialStyles(cellsArray)
})

//* Event listener to paste copied color into one of the cells
myColorsArray.forEach((el: HTMLDivElement) => {
  el.addEventListener('click', () => {
    if(copiedColor === undefined) return
    el.style.backgroundColor = `#${copiedColor}`
    el.dataset.color = copiedColor
    el.children[0].innerHTML = `#${copiedColor}`
  })
})