
const LogoutButton = ({setUser}) => {
  return (
      <button style={{marginLeft: '5px'}} onClick={() => handleClick(setUser)}>logout</button>
  )
}

const handleClick = (setUser) => {
  localStorage.clear()
  setUser(null)
}

export default LogoutButton