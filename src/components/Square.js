const Square = ({ squareColor, children }) => {
  return (
    <div className={`square ${squareColor}`}>
      {children}
    </div>
  )
}

export default Square
