import loginService from '../services/login'

const LoginForm = (
  {
    usernameFieldText,
    setUsernameFieldText,
    passwordFieldText,
    setPasswordFieldText,
    setUser
  }
) => {
  return (
    <form onSubmit={event => handleSubmit(event, setUser)}>
      <div>
        username
        <input 
          value={usernameFieldText}
          onChange={event => setUsernameFieldText(event.target.value)}
        ></input>
      </div>
      <div>
        password
        <input
          value={passwordFieldText}
          onChange={event => setPasswordFieldText(event.target.value)}
        ></input>
      </div>
      <button type="submit">log in</button>
    </form>
  )
}

const handleSubmit = async (event, setUser) => {
  event.preventDefault()
  
  const username = event.target[0].value
  const password = event.target[1].value
  const user = await loginService.submitLogin(username,password)
  if (user) {
    setUser(user.data)
    localStorage.setItem('user', JSON.stringify(user.data))
  }
}

export default LoginForm