import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
	//state lifting up (inner component to nearest parent component)
	const [activePlayer, setActivePlayer] = useState('X');
	// player`s switch
	function handleSelectedSquare(){
		setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
		console.log('App', activePlayer,'handleSelectSquare triggered');
	}
  return (
    <main>
		<div id="game-container">
			<ol id="players" className="highlight-player">
				<Player name="Player 1" symbol="X" isActive = {activePlayer === 'X'} />
				<Player name="Player 2" symbol="O" isActive = {activePlayer === 'O'}/>
			</ol>
			{/* onSelectSquare variable stores the refference of the handleSelectSquare()
				which will trigered inside the GameBoard component
			*/}
			<GameBoard onSelectSquare={handleSelectedSquare} activePlayerSymbol={activePlayer} />
		</div>
	</main>
  )
}

export default App
