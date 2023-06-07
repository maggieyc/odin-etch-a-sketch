let container = document.querySelector('.container');
let mouseDown = false;

container.addEventListener('mousedown',(e) => {mouseDown = true});
container.addEventListener('mouseup', (e) => {mouseDown = false});

function changeColor(){

  if (mouseDown){
    this.classList.add('clicked');
  } 
}

function createGrid(width){
  for (let i = 0; i < width; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let j = 0; j< width; j++){
      let box = document.createElement('div');
      box.classList.add('box');
      box.addEventListener('mouseover', changeColor);
      row.appendChild(box);
    }
  }

}

// create grid (16x16 by default)
createGrid(16);

// allow user to change the size of the grid
let gridButton = document.querySelector('.change-size');

function changeGrid(){
  let width = prompt('Input a width for the grid:', '16');
  if (!isNaN(Number(width))){
    container.innerHTML = '';
    createGrid(Number(width));
  }
}

gridButton.addEventListener('click', changeGrid);