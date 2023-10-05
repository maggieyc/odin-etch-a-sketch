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
			if ( x !== boxes[0].length -1){
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

  container.innerHTML = '';
  boxes = [];
  x = width/2;
  y = width/2;

  for (let i = 0; i < width * 2/3; i++){
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

}

// create grid
createGrid(20);

// allow user to change the size of the grid
let smallButton = document.querySelector('.small-grid');
let mediumButton = document.querySelector('.medium-grid');
let largeButton = document.querySelector('.large-grid');

//let gridSizes = document.querySelector('.grid-sizes');
//gridSizes.onchange = (e) => createGrid(e.value);

smallButton.addEventListener('click', () => createGrid(15));
mediumButton.addEventListener('click', () => createGrid(30));
largeButton.addEventListener('click', () => createGrid(90));



// allow user to clear grid
let clearButton = document.querySelector('.clear-grid');

function clearGrid(){
  x = boxes.length/2;
  y = boxes.length/2;
  for (let y = 0; y < boxes.length; y++){
    for (let x = 0; x < boxes[y].length; x++){
      if (boxes[y][x].classList.contains('clicked')){
        boxes[y][x].classList.remove('clicked');
      }
    }
  }
}

clearButton.addEventListener('click', clearGrid);