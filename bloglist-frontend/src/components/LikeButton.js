
import PropTypes from 'prop-types'

const LikeButton = ({handleClick, id}) => {
  return (
    <div id={id} style={{display: 'inline-block'}}>
      <button onClick={handleClick}>like</button>
    </div>
  )
}
LikeButton.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.string
}

export default LikeButton