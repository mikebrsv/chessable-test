import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Piece = ({ piece, pieceColor }) => {
  return <FontAwesomeIcon icon={piece} className={`piece ${pieceColor}`} />
}

export default Piece
