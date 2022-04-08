import React, { useState, useEffect } from "react";
import Square from "./Tic-Tak-Toe/Square";
import './board.css'

const clearState = Array(8).fill(null);

function App() {
    const [gameState, updateGameState] = useState(clearState)
    const [isXChance, updateIsXChance] = useState(false)

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        //console.log(strings)
        if (strings[index])
            return;
        strings[index] = isXChance ? "X" : "0";
        updateIsXChance(!isXChance)
        updateGameState(strings)
    }

    const clearGame = () => {
        updateGameState(clearState)
    }

    useEffect(() => {
      
        let winner = checkWinner();
       
        if (winner) {
            clearGame();
            alert(`woh ! ${winner} won the Game !`)
        } 
        
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        // console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }    
                 //console.log("state c", gameState[c]);
        }
        let count =  0;
        for(let i =0;i<clearState.length;i++){
            if(gameState[i] === null ){                
                count++ ;
            }
        }
        if(count === 0){
            alert("Game draw");
        }
        
        return null;
    }

   


    return (
      
        <div className="App">
            
            <div className="board">
            <div className="row ">
                <Square  onClick={() => onUserClicked(0)} state={gameState[0]}/>
                <Square  onClick={() => onUserClicked(1)} state={gameState[1]}/>
                <Square  onClick={() => onUserClicked(2)} state={gameState[2]}/>
            </div>
            <div className="row">
                <Square  onClick={() => onUserClicked(3)} state={gameState[3]}/>
                <Square  onClick={() => onUserClicked(4)} state={gameState[4]}/>
                <Square  onClick={() => onUserClicked(5)} state={gameState[5]}/>
            </div>
            <div className="row ">
                <Square  onClick={() => onUserClicked(6)} state={gameState[6]}/>
                <Square  onClick={() => onUserClicked(7)} state={gameState[7]}/>
                <Square onClick={() => onUserClicked(8)} state={gameState[8]}/>
            </div>
            </div>

            <div className="clear-button">
            <button  onClick={clearGame}>Clear Game</button>
            </div>
        </div>



  );
}

export default App;
