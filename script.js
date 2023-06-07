// Create 16x16 grid
let container = document.querySelector('.container');
let mouseDown = false;

container.addEventListener('mousedown',(e) => {mouseDown = true});
container.addEventListener('mouseup', (e) => {mouseDown = false});

function changeColor(){

  if (mouseDown){
    this.classList.add('clicked');
  } 
}

for (let i = 0; i < 16; i++){
  let row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  for (let j = 0; j< 16; j++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', changeColor);
    row.appendChild(box);
  }
}
