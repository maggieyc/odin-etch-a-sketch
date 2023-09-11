let container = document.querySelector('.container');
let boxes;
let x,y;


// TRACK ARROW KEYS

document.addEventListener('keydown', keydown_ivent);
document.addEventListener('keyup', keyup_ivent);
function keydown_ivent(e) {
	
	let key = '';
	switch (e.key) {
		case 'ArrowUp':
      if (y !== 0) {
        y = y-1;
      }
			break;
		case 'ArrowDown':
			if ( y !== boxes.length -1){
        y = y+1;
      }
			break;
		case 'ArrowLeft':
			if ( x !== 0){
        x = x-1;
      }
			break;
		case 'ArrowRight':
			if ( x !== boxes.length -1){
        x = x+1;
      }
			break;
	}

  // change the color of the box
  boxes[y][x].classList.add('clicked');

	return false;
}

function keyup_ivent(e) {
  //
	return false; 
}

function createGrid(width){
  boxes = [];
  x = width/2;
  y = width/2;

  for (let i = 0; i < width; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    boxes.push([]);

    for (let j = 0; j< width; j++){
      let box = document.createElement('div');
      box.classList.add('box');
      row.appendChild(box);
      boxes[boxes.length-1].push(box);
    }
  }

  console.log(boxes);

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



// allow user to clear grid
let clearButton = document.querySelector('.clear-grid');

function clearGrid(){
  for (let y = 0; y < boxes.length; y++){
    for (let x = 0; x < boxes.length; x++){
      if (boxes[y][x].classList.contains('clicked')){
        boxes[y][x].classList.remove('clicked');
      }
    }
  }
}

clearButton.addEventListener('click', clearGrid);