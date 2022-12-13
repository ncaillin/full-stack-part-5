import PropTypes from  'prop-types'
const LogoutButton = ({setUser}) => {
  const style = {
    width: '30%',
    lineHeight: '221.2%',
    borderRadius: '0px 5px 5px 0px',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: '1px',

  }
  return (
    <button style={style} onClick={() => handleClick(setUser)}>logout</button>
  )
}
LogoutButton.propTypes = {
  setUser: PropTypes.func
}

const handleClick = (setUser) => {
  localStorage.clear()
  setUser(null)
}

export default LogoutButton