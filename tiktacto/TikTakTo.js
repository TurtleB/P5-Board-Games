var lineColor;
var spaceSize = 150;

//
function setup() {
	createCanvas(spaceSize*3, spaceSize*3);
	lineColor = color(255,0,0);
	drawBoard();
	frameRate(2);
}



function drawBoard() {
	stroke(0);
	line(spaceSize, 0, spaceSize, spaceSize*3);
	line(spaceSize*2, 0, spaceSize*2, spaceSize*3);
	line(0, spaceSize, spaceSize*3, spaceSize);
	line(0, spaceSize*2, spaceSize*3, spaceSize*2);
	for(var i=0; i<9; i++){
		let x = (i%3)*spaceSize;
		let y = (Math.floor(i/3))*spaceSize;
		if(board[i] === 'X'){
			drawX(x,y)
		}
		else if (board[i] === 'O'){
			drawO(x,y)
		}
	}
}

function mousePressed() {
	if (isClickinBounds(mouseX, mouseY)){
		let spaceIndex = getSpace(mouseX, mouseY);
		doTurn(spaceIndex)
		drawBoard()
	}
}

function isClickinBounds(x,y) {
	return	mouseX >= 0 && mouseX <= spaceSize*3 && mouseY >= 0 && mouseY <= spaceSize*3;
}

function getSpace(x,y) {
	let spaceX = Math.floor(x/spaceSize);
	let spaceY = Math.floor(y/spaceSize);
	return spaceX + spaceY*3;
}

function clearSpace(x, y) {
	fill(255);
	noStroke()
	rect(x,y,spaceSize, spaceSize);
	stroke(0)
}

function drawX(x, y) {
	line(x,y,x+spaceSize,y+spaceSize);
	line(x,y+spaceSize,x+spaceSize,y);
}

function drawO(x, y){
	circle(x+(spaceSize/2),y+(spaceSize/2), spaceSize)
}

function drawWin() {
	// TODO
}