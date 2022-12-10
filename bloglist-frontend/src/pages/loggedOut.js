import LoginForm from "../components/LoginForm"
import Notification from "../components/Notification"

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

export default LoggedOutPage