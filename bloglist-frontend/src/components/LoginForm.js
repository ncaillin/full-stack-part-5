import loginService from '../services/login'
import PropTypes from 'prop-types'
import { useState } from 'react'

const LoginForm = (
  {
    setUser,
    setNotification
  }
) => {
  const [usernameFieldText, setUsernameFieldText] = useState('')
  const [passwordFieldText, setPasswordFieldText] = useState('')
  return (
    <form onSubmit={event => handleSubmit(event, setUser, setNotification)}>
      <div>
        username
        <input 
          value={usernameFieldText}
          placeholder={'username'}
          id='username'
          onChange={event => setUsernameFieldText(event.target.value)}
        ></input>
      </div>
      <div>
        password
        <input
          value={passwordFieldText}
          placeholder={'password'}
          id='password'
          onChange={event => setPasswordFieldText(event.target.value)}
        ></input>
      </div>
      <button type="submit">log in</button>
    </form>
  )
}
LoginForm.propTypes = {
  usernameFieldText: PropTypes.string,
  setUsernameFieldText: PropTypes.func,
  passwordFieldText: PropTypes.string,
  setPasswordFieldText: PropTypes.func,
  setUser: PropTypes.func,
  setNotification: PropTypes.func
}

const handleSubmit = async (event, setUser, setNotification) => {
  event.preventDefault()
  
  const username = event.target[0].value
  const password = event.target[1].value
  const user = await loginService.submitLogin(username,password)
  if (user) {
    setUser(user.data)
    localStorage.setItem('user', JSON.stringify(user.data))
  } else {
    setNotification({type: 'error', message: 'invalid username or password'})
    setTimeout(() => {
      setNotification({type: 'info', message: null})
    }, 3000)
  }
}

export default LoginForm