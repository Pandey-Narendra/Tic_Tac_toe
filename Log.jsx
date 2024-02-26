export default function Log({turns}){
    console.log(turns)
    return(
        <ol id="log">
            {/* `${}` javascript, to dynamically insert string as a value   */}
           {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.column}`}>{turn.player} selected {turn.square.row},{turn.square.column}</li>
            ))} 
        </ol>
    );
}