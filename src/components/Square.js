import Piece from './Piece'

const Square = ({ color, piece }) => {
  return (
    <div className={`square ${color}`}>
      {piece && (<Piece piece={piece} />)}
    </div>
  )
}

export default Square
