const initialGameBoad = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard(){
    return(
        <ol id="game-board">
            {initialGameBoad.map((row,rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSysmbol,columnIndex) =>
                            <li key={columnIndex}>
                                <button>{playerSysmbol}</button>
                            </li>
                        )}
                    </ol>
                </li>
             )}
        </ol>
    );
}