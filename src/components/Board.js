import Square from './Square';
import Piece from './Piece';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'

const Board = ({ spawnIndex }) => {
  const renderSquare = (index) => {
    let squareColor;
    let piece;
    let pieceColor;

    if (
      (index >= 0 && index <= 7) // BLACK PIECES 1st row
      || (index >= 16 && index <= 23)
      || (index >= 32 && index <= 39)
      || (index >= 48 && index <= 55) // WHITE PIECES 2nd row
    ) {
      if (spawnIndex === index) { piece = faChessPawn; pieceColor = 'white' }

      index % 2 === 0 ? squareColor = 'white' : squareColor = 'black'
    } else { // BLACK PIECES 2nd row & WHITE PIECES 1st row
      if (index === 10) { piece = faChessPawn; pieceColor = 'black' }
      index % 2 === 0 ? squareColor = 'black' : squareColor = 'white'
    }

    return (
      <Square key={index} squareColor={squareColor}>
        {piece && <Piece piece={piece} pieceColor={pieceColor} />}
      </Square>
    )
  }

  return (
    <div className="board">
      {[...Array(64)].map((_, index) => renderSquare(index))}
    </div>
  )
}

export default Board