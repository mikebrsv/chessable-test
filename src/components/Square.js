const Square = ({ color, children, onSquareClickHandler, legal }) => {
  return (
    <div
      className={`square ${color} ${legal ? 'legal' : ''}`}
      onClick={onSquareClickHandler}
    >{children}
    </div>
  )
}

export default Square
