var lineColor;
var spaceSize = 150;
var padding = 50;
var isBlack = false;

//
function setup() {
	createCanvas(spaceSize*8 + padding*2, spaceSize*8 + padding*2);
	lineColor = color(255,0,0);
	drawBoard();
	frameRate(2);
}



function drawBoard() {
	stroke(0);
	for(var i=0; i<8; i++){
		for(var j=0; j<8; j++){
			if(isBlack){
				fill(0)
			}
			else{
				fill('white')
			}
			rect(spaceSize*j+padding, spaceSize*i+padding, spaceSize, spaceSize)
			isBlack = !isBlack
		}
		isBlack = !isBlack
	}
	for(var i=0; i<9; i++){
		line(spaceSize*i + padding, padding, spaceSize*i + padding, spaceSize*8+padding);
	}
	for(var i=0; i<9; i++){
		line(padding, spaceSize*i + padding, spaceSize*8 + padding, spaceSize*i+padding);
	}
}


function mousePressed() {
	if (isClickinBounds(mouseX, mouseY)){
		let spaceIndexX = getSpaceX(mouseX);
		let spaceIndexY = getSpaceY(mouseY);
		console.log('The X index is: ' + spaceIndexX)
		console.log('The Y index is: ' + spaceIndexY)
//		doTurn(spaceIndex)
//		drawBoard()
	}
}

function isClickinBounds(x,y) {
	return	mouseX >= padding && mouseX <= spaceSize*8+padding*2 && mouseY >= padding && mouseY <= spaceSize*8+padding*2;
}

function getSpaceX(x) {
	let spaceX = Math.floor((x-padding)/spaceSize);
	return spaceX;
}

function getSpaceY(y) {
	let spaceX = Math.floor((y-padding)/spaceSize);
	return spaceX;
}



function clearSpace(x, y) {
//	fill(255);
//	noStroke()
//	rect(x,y,spaceSize, spaceSize);
//	stroke(0)
//}

//function drawX(x, y) {
//	line(x,y,x+spaceSize,y+spaceSize);
//	line(x,y+spaceSize,x+spaceSize,y);
//}

//function drawO(x, y){
//	circle(x+(spaceSize/2),y+(spaceSize/2), spaceSize)
//}
}
