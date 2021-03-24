import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Piece = ({ piece }) => {
  return (
    <FontAwesomeIcon icon={piece} className="piece black" />
  )
}

export default Piece
