var DRAW_DEBUG = false;

var table;

//
function setup() {
	initializeSettings();
	createCanvas(LAYOUT_SETTINGS.TABLE_DIMENSIONS.x, LAYOUT_SETTINGS.TABLE_DIMENSIONS.y);
	table = new Table();
	noLoop();
}


//
function draw() {
	drawTable(table);
}


//
function mousePressed() {
	table.dealHand();
	redraw();
}