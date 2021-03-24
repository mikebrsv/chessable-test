import React from 'react'
import Square from './Square';
import Pawn from './Pawn'; 

const Board = () => {
  const renderSquare = (index) => {
    let color;

    if (
      (index >= 0 && index <= 7)
      || (index >= 16 && index <= 23)
      || (index >= 32 && index <= 39)
      || (index >= 48 && index <= 55)
    ) {
      index % 2 === 0 ? color = 'white' : color = 'black'
    } else {
      index % 2 === 0 ? color = 'black' : color = 'white'
    }

    return <Square key={index} color={color} index={index} />
  }

  return (
    <>
      <Pawn />
      <div className="board">
        {[...Array(64)].map((_, index) => renderSquare(index))}
      </div>
    </>
  )
}

export default Board