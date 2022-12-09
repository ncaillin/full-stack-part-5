import LoginForm from "../components/LoginForm"

const LoggedOutPage = (
  {
    usernameFieldText,
    setUsernameFieldText,
    passwordFieldText,
    setPasswordFieldText,
    setUser
  }
) => {
  return (
    <div>
      <h2>log in</h2>
      <LoginForm 
        usernameFieldText={usernameFieldText}
        setUsernameFieldText={setUsernameFieldText}
        passwordFieldText={passwordFieldText}
        setPasswordFieldText={setPasswordFieldText}
        setUser={setUser}
      />
    </div>
  )
}

export default LoggedOutPage