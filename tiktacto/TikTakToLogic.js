var xTurn = true;

var board = [];
for(var i=0; i<9; i++){
	board.push('');
}

var winner = '';
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

function setWinner(){
	if (xTurn){
		if(hasWon('X')){
			winner = 'X';
		}
	}
	else{
		if(hasWon('O')){
			winner = 'O';
		}
	}
}

function hasWon(player){
	if (winner === ''){
		for (var i=0; i<3; i++){
			if(winXCheck(i)){
				return true;
			}
			else if(winYCheck(i)){
				return true;
			}
		}
		if(winSlashCheck()){
			return true;
		}
	}	
	return false
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