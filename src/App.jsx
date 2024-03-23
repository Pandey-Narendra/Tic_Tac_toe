import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "../Log";
import GameOver from "./GameOver.jsx";
import {WINNING_COMBINATIONS} from "./components/winning-combinations.js";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

  
// helper function/component
function getActivePlayer(gameTurns){
	let currentPlayer = 'X';
	if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
		currentPlayer = 'O'; 
	}
	return currentPlayer;
}

function App() {
	//state lifting up (inner component to nearest parent component)
	// const [activePlayer, setActivePlayer] = useState('X');
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = getActivePlayer(gameTurns);
	const [players, setPlayers] = useState(
			{
				X : "Player 1",
				O : "Player 2",
			}
		);

	let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];
	for(const turn of gameTurns){
		const {square, player} = turn;
		const {row, column} = square;
		gameBoard[row][column] = player;
	}

    // check winner
	let winner;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];
  
	  if(
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
	  	){
			winner = players[firstSquareSymbol];
	  	}
	}
  
	const hasDraw = gameTurns.length === 9 && !winner;

	// player`s switch
	function handleSelectedSquare(rowIndex,columnIndex){
		// setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
		
		setGameTurns((prevTurns) =>{
			// let currentPlayer = 'X';
			// if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
			// 	currentPlayer = 'O'; 
			// }

			const currentPlayer = getActivePlayer(prevTurns);

			const updatedTurns = [
				{
					square: {row: rowIndex, column: columnIndex}, player: currentPlayer
				},
				...prevTurns,
			];

			return updatedTurns;
		});
		// console.log('App', activePlayer,'handleSelectSquare triggered');
	}

	function handleRestart(){
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol,newname){
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newname
			};
		});
	}

	return (
		<main className="main-container">
		  <div id="game-container">
			<ol id="players" className="highlight-player">
			  <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
			  <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange} />
			</ol>
			{(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
			<GameBoard onSelectSquare={handleSelectedSquare} board={gameBoard} />
		  </div>
		  <Log turns={gameTurns} />
		</main>
	  );
	}	  

export default App
