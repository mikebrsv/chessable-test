import { useState } from 'react'
import Board from './components/Board';

function App() {
  const [spawnIndex, setSpawnIndex] = useState(null)
  const [justSpawned, setJustSpawned] = useState(false)

  const spawnPawn = () => {
    setSpawnIndex(Math.floor(Math.random() * (55 - 48 + 1)) + 48)
    setJustSpawned(true)
    setTimeout(() => { setJustSpawned(false) }, 1000);
  }

  return (
    <div className="row">

      <div className="col">
        <Board spawnIndex={spawnIndex} />
      </div>

      <div className="col">
        <button className="btn btn-primary" onClick={spawnPawn}>Spawn a pawn!</button>
      </div>

      { justSpawned && <div className="status-spawn">Spawned one!</div>}
    </div>
  );
}

export default App;
