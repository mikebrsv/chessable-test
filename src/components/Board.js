import Square from './Square';
import Piece from './Piece';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'

const Board = ({ playerIndex, onSquareClickHandler, firstMove, pawnMove }) => {

  const renderBoard = (index) => {
    let squareColor;

    if (
      (index >= 0 && index <= 7)
      || (index >= 16 && index <= 23)
      || (index >= 32 && index <= 39)
      || (index >= 48 && index <= 55)
    ) {
      index % 2 === 0 ? squareColor = 'white' : squareColor = 'black'
    } else {
      index % 2 === 0 ? squareColor = 'black' : squareColor = 'white'
    }

    return (
      <Square
        key={index}
        color={squareColor}
        onSquareClickHandler={() => onSquareClickHandler(index)}
        legal={pawnMove(firstMove, playerIndex, index)}
      >
        {((index === 10 && playerIndex !== 2) && (index === 10 && playerIndex !== 10)) && renderPiece(faChessPawn, 'black')}
        {index === playerIndex && renderPiece(faChessPawn, 'white')}
      </Square>
    )
  }

  const renderPiece = (icon, color) => {
    return <Piece icon={icon} color={color} />
  }

  return (
    <div className="board">
      {[...Array(64)].map((_, index) => renderBoard(index))}
    </div>
  )
}

export default Board