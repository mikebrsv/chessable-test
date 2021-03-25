import { useState } from 'react'
import Board from './components/Board';

function App() {
  const [playerIndex, setPlayerIndex] = useState(null)
  const [justSpawned, setJustSpawned] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [firstMove, setFirstMove] = useState(false)

  const spawnPawn = () => {
    setPlayerIndex(Math.floor(Math.random() * (55 - 48 + 1)) + 48)
    setJustSpawned(true)
    setGameStarted(true)
    setFirstMove(true)
    setTimeout(() => { setJustSpawned(false) }, 1000);
  }

  const pawnMove = (firstMove, playerIndex, index) => {
    if (playerIndex !== 18) {
      if (
        (firstMove && playerIndex - 16 === index)
        || playerIndex - 8 === index
        || ((playerIndex === 17 || playerIndex === 19) && index === 10)
      ) {
        return true
      }
    }

    return false
  }

  const onSquareClickHandler = (i) => {
    if (gameStarted) {
      if (pawnMove(firstMove, playerIndex, i)) {
        setPlayerIndex(i)
      }
      firstMove && setFirstMove(false)
    }
  }

  return (
    <div className="row">

      <div className="col">
        <Board
          playerIndex={playerIndex}
          onSquareClickHandler={onSquareClickHandler}
          firstMove={firstMove}
          pawnMove={pawnMove}
        />
      </div>

      <div className="col">
        <button className="btn btn-primary" onClick={spawnPawn}>Spawn a pawn!</button>
      </div>

      {justSpawned && <div className="status-spawn">Spawned one</div>}
    </div>
  );
}

export default App;
