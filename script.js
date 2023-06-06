// Create 16x16 grid
let container = document.querySelector('.container');


function changeColor(e){

}

for (let i = 0; i < 16; i++){
  let row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);
  for (let j = 0; j< 16; j++){
    let box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mousedown', changeColor);
    row.appendChild(box);
  }
}
