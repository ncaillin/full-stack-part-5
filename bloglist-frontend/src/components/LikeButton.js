
import PropTypes from 'prop-types'

const LikeButton = ({handleClick}) => {
  return (
    <div style={{display: 'inline-block'}}>
      <button onClick={handleClick}>like</button>
    </div>
  )
}
LikeButton.propTypes = {
  handleClick: PropTypes.func
}

export default LikeButton