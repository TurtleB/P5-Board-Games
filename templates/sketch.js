var tick = 0;
var toggle = true;
var boxColor = 0;
var bgColor = 255;

//
function setup() {
	createCanvas(500, 500);
	frameRate(60);
}


//
function draw() {
	fill(bgColor);
	rect(0, 0, 500, 500);
	fill(boxColor);
	rect((tick % 10) * 50, Math.floor(tick/10) * 50, 50, 50);
	tick++;
	tick = tick % 100;
}


//
function mousePressed() {
	toggle = !toggle;
	if(toggle) {
		bgColor = 0;
		boxColor = 255;
	} else {
		bgColor = 255;
		boxColor = 0;
	}
}