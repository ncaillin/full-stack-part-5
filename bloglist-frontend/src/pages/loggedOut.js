import LoginForm from '../components/LoginForm'
import Notification from '../components/Notification'
import PropTypes from 'prop-types'

const LoggedOutPage = (
  {
    usernameFieldText,
    setUsernameFieldText,
    passwordFieldText,
    setPasswordFieldText,
    setUser,
    notification,
    setNotification
  }
) => {
  return (
    <div>
      <h2>log in</h2>
      <Notification notification={notification} />
      <LoginForm 
        usernameFieldText={usernameFieldText}
        setUsernameFieldText={setUsernameFieldText}
        passwordFieldText={passwordFieldText}
        setPasswordFieldText={setPasswordFieldText}
        setUser={setUser}
        setNotification={setNotification}
      />
    </div>
  )
}
LoggedOutPage.propTypes = {
  usernameFieldText: PropTypes.string,
  setUsernameFieldText: PropTypes.func,
  passwordFieldText: PropTypes.string,
  setPasswordFieldText: PropTypes.func,
  setUser: PropTypes.func,
  notification: PropTypes.object,
  setNotification: PropTypes.func
}

export default LoggedOutPage