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
		if(spaceA === spaceB && spaceB === spaceC && spaceA !=== '') {
			winner = spaceA;
			winningSpaces = winConditions[i];
		}
	}
}


function hasWon(player){
	return winner != '';
}

function winXCheck(row){
	if (board[3*row] !== '' && board[3*row] === board[3*row+1] && board[3*row] === board[3*row+2]){
		if(xTurn){
			winner = 'X';
		}
		else{
			winner = 'O';
		}
		//draw a line through winning tiles?
	}
}

function winYCheck(col){
	if (board[col] !== '' && board[col] === board[col+3] && board[col] === board[col+6]){
		if(xTurn){
			winner = 'X';
		}
		else{
			winner = 'O';
		}
		//draw a line through winning tiles?
	}
}

function winSlashCheck(){
	if(board[4] !== ''){
		if(board[0] === board[4] && board[0] === board[8]){
			if(xTurn){
				winner = 'X'
			}
			else{
				winner = 'O'
			}
			//draw a line through winning tiles?
		}
		else if(board[2] === board[4] && board[2] === board[6]){
			if(xTurn){
				winner = 'X';
			}
			else{
				winner = 'O'
			}
			//draw a line through winning tiles?
		}
	}
	//Better behavior?
}