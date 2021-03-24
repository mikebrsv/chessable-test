import React from 'react'

const Square = ({ color, index }) => {
  return (
    <div className={`square ${color}`}>
      {index}
    </div>
  )
}

export default Square
