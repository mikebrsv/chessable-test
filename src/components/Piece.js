import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Piece = ({ icon, color }) => {
  return <FontAwesomeIcon icon={icon} className={`piece ${color}`} />
}

export default Piece
