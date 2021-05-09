var SUITS = ["clubs", "diamonds", "hearts", "spades"];
var RANKS = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];


//
function Card(suit, rank) {
	this.suit = suit;
	this.rank = rank;
	
	this.getName = function() {
		return RANKS[this.rank] + " of " + SUITS[this.suit];
	};
}


//
function Deck() {
	this.cards = [];
	for(var s = 0; s < SUITS.length; s++) {
		for(var r = 0; r < RANKS.length; r++) {
			this.cards.push(new Card(s, r));
		}
	}
	
	
	//
	this.shuffle = function() {
		let shuffledCards = [];
		for(var i = this.cards.length; i > 0; i--) {
			let c = Math.floor(Math.random() * i);
			shuffledCards.push(this.cards[c]);
			this.cards.splice(c, 1);
		}
		this.cards = shuffledCards;
	}
	
	
	//
	this.drawCard = function() {
		return this.cards.pop();
	}
}


//
function Table() {
	this.deck = new Deck();
	this.deck.shuffle();
	
	this.cards = [];
	for(var i = 0; i < 5; i++) {
		this.cards.push(null);
	}
	
	
	//
	this.dealHand = function() {
		for(var i = 0; i < 5; i++) {
			this.cards[i] = this.deck.drawCard();
		}
	};
}