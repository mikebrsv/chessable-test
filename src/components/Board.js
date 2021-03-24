import Square from './Square';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'

const Board = () => {
  const renderSquare = (index) => {
    let color;
    let piece;

    if (
      (index >= 0 && index <= 7)
      || (index >= 16 && index <= 23)
      || (index >= 32 && index <= 39)
      || (index >= 48 && index <= 55)
    ) {
      index % 2 === 0 ? color = 'white' : color = 'black'
    } else {
      index === 10 && (piece = faChessPawn)
      index % 2 === 0 ? color = 'black' : color = 'white'
    }

    return <Square key={index} color={color} piece={piece} />
  }

  return (
    <>
      <div className="board">
        {[...Array(64)].map((_, index) => renderSquare(index))}
      </div>
    </>
  )
}

export default Board