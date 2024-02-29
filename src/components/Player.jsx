import { useState } from "react";


export default function Player({name,symbol,isActive,onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEdit(){
        // react schedules the state updation function(setIsEditing), it is important to update the state using
        // a function call to update instantly, not shcduleing it 
       
        // setIsEditing(!isEditing);
        setIsEditing(editing => !editing);
        if(isEditing){
            onChangeName(symbol,playerName);
        }
 
        // console.log(isEditing);
    }
    
    function handleChange(event){
        setPlayerName(event.target.value)
    }

    return(
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input type="text" value={playerName} required onChange={handleChange} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}> {isEditing ? 'Save' : 'Edit'} </button>
        </li>
    );
}