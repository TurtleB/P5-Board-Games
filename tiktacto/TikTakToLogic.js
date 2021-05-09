var xTurn = true;

var board = [];
for(var i=0; i<9; i++){
	board.push('');
}

var winConditions = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

var winner = '';
var winningSpaces;
var turn = 0;
var currentPlayer = 'X'

function isSpaceEmpty(spaceIndex){
	return board[spaceIndex] === '';
}

function doTurn(spaceIndex){
	if (isSpaceEmpty(spaceIndex) && winner === ''){
		
		
		if (turn%2 == 0){
			board[spaceIndex] = 'X';
		}
		else{
			board[spaceIndex] = 'O';
		}
		setWinner();
		console.log('The winner is '+ winner);
		xTurn = !xTurn;
		turn++;
	}
}

// Check the winner and 
function setWinner() {
	for(var i = 0; i < winConditions.length; i++) {
		let spaceA = board[winConditions[i][0]];
		let spaceB = board[winConditions[i][1]];
		let spaceC = board[winConditions[i][2]];
		if(spaceA === spaceB && spaceB === spaceC && spaceA !== '') {
			winner = spaceA;
			winningSpaces = winConditions[i];
			drawWin(winningSpaces)
		}
	}
}


function hasWon(player){
	return winner != '';
}