import Board from './components/Board';

function App() {
  const spawnPawn = () => {
    console.log("spawned!")
  }

  return (
    <div className="row">

      <div className="col">
        <Board />
      </div>

      <div className="col">
        <button className="btn btn-primary" onClick={spawnPawn}>Spawn a pawn!</button>
      </div>
    </div>
  );
}

export default App;
