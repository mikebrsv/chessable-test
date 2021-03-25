// import { useState } from 'react'
import Square from './Square';
import Piece from './Piece';
import { faChessPawn } from '@fortawesome/free-solid-svg-icons'

const Board = ({ spawnIndex }) => {
  // const [test, setTest] = useState('kek')


  const onSquareClickHandler = (index) => {
    console.log('onSquareClickHandler', index)
    if(spawnIndex - 8 === index) {
      console.log('CAN MOVE HERE')
    } else {
      console.log('CANNOT MOVE HERE')
    }
  }

  const onPieceClickHandler = (index) => {
    console.log('onPieceClickHandler', index)
    console.log('spawnIndex', spawnIndex)
  }

  const movePawn = () => {
    console.log('clicked')
    // return i = 'mel'
    // setTest('pek')

  }

  // const renderSquare = (index) => {
  //   let squareColor;
  //   let piece;
  //   let pieceColor;
  //   // let pieceTrue = test;

  //   if (
  //     (index >= 0 && index <= 7) // BLACK PIECES 1st row
  //     || (index >= 16 && index <= 23)
  //     || (index >= 32 && index <= 39)
  //     || (index >= 48 && index <= 55) // WHITE PIECES 2nd row
  //   ) {
  //     if (spawnIndex === index) { piece = faChessPawn; pieceColor = 'white' }

  //     index % 2 === 0 ? squareColor = 'white' : squareColor = 'black'
  //   } else { // BLACK PIECES 2nd row & WHITE PIECES 1st row
  //     if (index === 10) { piece = faChessPawn; pieceColor = 'black' }
  //     index % 2 === 0 ? squareColor = 'black' : squareColor = 'white'
  //   }

  //   return (
  //     // <Square key={index} squareColor={squareColor} onClick={() => onSquareClickHandler(index)}>
  //     <Square key={index} squareColor={squareColor} onClick={() => movePawn()}>
  //       <div style={{color:'red'}}>{index}</div>
  //       {/* <div style={{color:'red'}}>{pieceTrue}</div> */}
  //       {piece && <Piece piece={piece} pieceColor={pieceColor} onClick={() => onPieceClickHandler(index)} />}
  //     </Square>
  //   )
  // }
  const renderBoard = (index) => {
    let squareColor;
    // let piece;
    // let pieceColor;
    // let pieceTrue = test;

    if (
      (index >= 0 && index <= 7) // BLACK PIECES 1st row
      || (index >= 16 && index <= 23)
      || (index >= 32 && index <= 39)
      || (index >= 48 && index <= 55) // WHITE PIECES 2nd row
    ) {
      // if (spawnIndex === index) { piece = faChessPawn; pieceColor = 'white' }

      index % 2 === 0 ? squareColor = 'white' : squareColor = 'black'
    } else { // BLACK PIECES 2nd row & WHITE PIECES 1st row
      // if (index === 10) { piece = faChessPawn; pieceColor = 'black' }
      index % 2 === 0 ? squareColor = 'black' : squareColor = 'white'
    }

    return (
      // <Square key={index} squareColor={squareColor} onClick={() => onSquareClickHandler(index)}>
      <Square key={index} squareColor={squareColor}>
        <div style={{color:'red'}}>{index}</div>
        {/* <div style={{color:'red'}}>{pieceTrue}</div> */}
        {/* {piece && <Piece piece={piece} pieceColor={pieceColor} onClick={() => onPieceClickHandler(index)} />} */}
      </Square>
    )
  }

  return (
    <div className="board">
      {[...Array(64)].map((_, index) => renderBoard(index))}
    </div>
  )
}

export default Board