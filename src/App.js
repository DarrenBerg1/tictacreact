import './App.css';
import React, {useState} from 'react';
import { Board } from './Components/Board';
import { ScoreBoard } from './Components/ScoreBoard';
import { ResetButton } from './Components/ResetButton';



function App() {

  const WIN_CONDTIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [0,4,8],
    [2,4,6]
  ]
  
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({xScore: 0, oScore: 0})
  const [gameOver, setGameOver] = useState(false)


 function handleBoxClick(boxIdx) {
  const updatedBoard = board.map((value, idx) => {
    if(idx === boxIdx) {
      return xPlaying === true ? "X" : "O";
    }else{
      return value;
    }
  })

    const winner = checkWinner(updatedBoard);

    if(winner) {
      if(winner === "O"){
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      }else{
        let {xScore} = scores;
        xScore += 1
        setScores({...scores, xScore})
      }
    }
  
    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
 }

 function checkWinner(board){
  for(let i = 0; i < WIN_CONDTIONS.length; i++){
    const [x,y,z] = WIN_CONDTIONS[i];

    if(board[x] && board[x ]=== board[y] && board[y] === board[z] ) {
      setGameOver(true)
      return board[x];
    }
  }
}

  function resetBoard( ){
    setGameOver(false)
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">

      <ScoreBoard scores={scores} xPlaying={xPlaying}/>
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
      <ResetButton resetBoard={resetBoard}/>
    </div>
  );
}

export default App;
