import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameBoard((prevGameBoard) => {
      //prevGameBoard would contains all rows in array and map() will gets its inner colunms
      const updatedBoard = [...prevGameBoard.map(innerArrayElements => [...innerArrayElements])];
      updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    console.log('GameBoard', activePlayerSymbol, gameBoard)
    // state lifting up, App Component will be re-executed
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* player Symbol contains value present at the index */}
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, columnIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}