import React,{useState} from "react";
import Square from "./square";

const Board = () => {

    const [game_array,setarray] =  useState( Array(9).fill(null));
    const wining_condition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]; 

    function checkwinner(){
        for(let i of wining_condition){
            console.log(i);
            if(game_array[i[0]] != null && game_array[i[0]] == game_array[i[1]] && game_array[i[0]] == game_array[i[2]]){
               return true;
            }
        }
        return false
    }
    const [turn,change_turn] = useState(true); // true - X and false - O

    function handle(index){
        if(game_array[index] !== null);
        else{
            game_array[index] = turn ? "X" : "O";
            checkwinner();
            change_turn(!turn);
            setarray(game_array);
        }
    };

    if(checkwinner()){
        return(
            <div className="board">
                <p>Winner {!turn ? "X" : "O"}</p>
                <button className="restart_button" onClick={() => window.location.reload()}>Restart</button>
            </div>
        );
    }
    else{
        return(
            <>
                <div className="turns_screen">{turn?"X":"O"} Turn</div>
                <div className="board">
                    <div className="row">
                        <Square onclick = {() => handle(0)} value= {game_array[0]} />
                        <Square onclick = {() => handle(1)} value= {game_array[1]} />
                        <Square onclick = {() => handle(2)} value= {game_array[2]} />
                    </div>
                    <div className="row">
                        <Square onclick = {() => handle(3)} value= {game_array[3]} />
                        <Square onclick = {() => handle(4)} value= {game_array[4]} />
                        <Square onclick = {() => handle(5)} value= {game_array[5]} />
                    </div>
                    <div className="row">
                        <Square onclick = {() => handle(6)} value= {game_array[6]} />
                        <Square onclick = {() => handle(7)} value= {game_array[7]} />
                        <Square onclick = {() => handle(8)} value= {game_array[8]} />
                    </div>
                </div>
            </>
        );
    };
}
export default Board ;