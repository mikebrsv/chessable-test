import React from 'react'
import Square from './Square';

const Board = () => {
  const renderSquare = (color) => {
    return (
      <Square color={color} />
    )
  }

  return (
    <div className="board">
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}

      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}

      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}

      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}

      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}

      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}

      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}

      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
      {renderSquare('black')}
      {renderSquare('white')}
    </div>
  )
}

export default Board
