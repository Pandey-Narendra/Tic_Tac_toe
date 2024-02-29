// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];
                                                //turn
export default function GameBoard({onSelectSquare,board}) { 

// state lifting up to App component
// let gameBoard = initialGameBoard;
// for(const turn of turns){
//   const {square, player} = turn;
//   const {row, column} = square;
//   gameBoard[row][column] = player;
// }


// old way
    //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   function handleSelectSquare(rowIndex, columnIndex) {
//     setGameBoard((prevGameBoard) => {
//       //prevGameBoard would contains all rows in array and map() will gets its inner colunms
//       const updatedBoard = [...prevGameBoard.map(innerArrayElements => [...innerArrayElements])];
//       updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
//       return updatedBoard;
//     });
//     console.log('GameBoard', activePlayerSymbol, gameBoard)
//     // state lifting up, App Component will be re-executed
//     onSelectSquare();
//   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* player Symbol contains value present at the index */}
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectSquare(rowIndex,columnIndex)}  disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}