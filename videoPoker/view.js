var COLOR_SETTINGS;
var LAYOUT_SETTINGS;

var table;

//
function ColorSettings() {
	this.TABLE_COLOR = color(0, 200, 0);
	this.SUIT_COLOR = [color(0), color(255, 0, 0), color(255, 0, 0), color(0)];
}


//
function LayoutSettings(tableWidth, tableHeight) {
	this.TABLE_DIMENSIONS = {"x": tableWidth, "y": tableHeight};
	
	this.CARD_POSITIONS = [];
	let cardMargin = (this.TABLE_DIMENSIONS.x - (5 * 125)) / 6;
	for(var i = 0; i < 5; i++) {
		this.CARD_POSITIONS.push({"x": cardMargin + ((125 + cardMargin) * i), "y": 180});
	}
}


//
function initializeSettings() {
	COLOR_SETTINGS = new ColorSettings();
	LAYOUT_SETTINGS = new LayoutSettings(1000, 800);
}


//
function drawTable(table) {
	drawBackground();
	drawCards(table.cards);
}


//
function drawBackground() {
	push();
	noStroke();
	fill(COLOR_SETTINGS.TABLE_COLOR);
	rect(0, 0, LAYOUT_SETTINGS.TABLE_DIMENSIONS.x, LAYOUT_SETTINGS.TABLE_DIMENSIONS.y);
	pop();
}


//
function drawCards(cards) {
	for(var i = 0; i < 5; i++) {
		drawCard(LAYOUT_SETTINGS.CARD_POSITIONS[i], cards[i]);
	}
}


//
function drawCard(position, card) {
	push();
	translate(position.x, position.y)
	if(card != null) {
		stroke(0);
		strokeWeight(2);
		fill(255);
		rect(0, 0, 125, 175, 10, 10, 10, 10);
		drawSuit(5, 5, card.suit);
		drawSuit(80, 130, card.suit);
		drawRank(22.5, 47.5, card.rank, COLOR_SETTINGS.SUIT_COLOR[card.suit]);
	} else {
		stroke(255);
		strokeWeight(5);
		noFill();
		rect(0, 0, 125, 175, 10, 10, 10, 10);
	}
	pop();
}


// Draw the suit in a scaled 40x40 square starting at the specified corner
function drawSuit(cornerX, cornerY, suit) {
	push();
	translate(cornerX, cornerY);
	noStroke();
	if(SUITS[suit] == "clubs") {
		fill(COLOR_SETTINGS.SUIT_COLOR[suit]);
		circle(20, 10, 20);
		circle(10, 20, 20);
		circle(30, 20, 20);
		rect(15, 10, 10, 30);
	} else if(SUITS[suit] == "diamonds") {
		fill(COLOR_SETTINGS.SUIT_COLOR[suit]);
		quad(20, 0, 40, 20, 20, 40, 0, 20);
	} else if(SUITS[suit] == "hearts") {
		fill(COLOR_SETTINGS.SUIT_COLOR[suit]);
		circle(10, 10, 20);
		circle(30, 10, 20);
		let offset = sin(QUARTER_PI) * 10;
		quad(20, 10, 30 + offset, 10 + offset, 20, 40, 10 - offset, 10 + offset);
	} else if(SUITS[suit] == "spades") {
		fill(COLOR_SETTINGS.SUIT_COLOR[suit]);
		circle(10, 20, 20);
		circle(30, 20, 20);
		let offset = sin(QUARTER_PI) * 10;
		quad(20, 20, 30 + offset, 20 - offset, 20, 0, 10 - offset, 20 - offset);
		rect(15, 10, 10, 30);
	}
	if(DRAW_DEBUG) {
		stroke(255, 0, 0);
		strokeWeight(1);
		noFill();
		rect(0, 0, 40, 40);
	}
	pop();
}



RANK_TXT = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Draws the rank in a scaled 80x80 square starting at the specified corner
function drawRank(cornerX, cornerY, rank, suitColor) {
	push();
	translate(cornerX, cornerY);
	noStroke();
	fill(suitColor);
	let rankTxt = RANK_TXT[rank];
	textSize(80);
	textStyle(BOLD);
	textAlign(CENTER);
	text(rankTxt, 40, 68);
	if(DRAW_DEBUG) {
		stroke(255, 0, 0);
		strokeWeight(1);
		noFill();
		rect(0, 0, 80, 80);
	}
	pop();
}