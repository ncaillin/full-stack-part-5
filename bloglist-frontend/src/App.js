import { useState, useEffect } from 'react'
import LoggedInPage from './pages/loggedIn'
import LoggedOutPage from './pages/loggedOut'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [usernameFieldText, setUsernameFieldTest] = useState('username')
  const [passwordFieldText, setPasswordFieldText] = useState('password')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      {
        user !== null
          ? <LoggedInPage
              blogs={blogs}
              user={user}
            />
          : <LoggedOutPage
              usernameFieldText={usernameFieldText}
              setUsernameFieldText={setUsernameFieldTest}
              passwordFieldText={passwordFieldText}
              setPasswordFieldText={setPasswordFieldText}
              setUser={setUser}
            />
      }
    </div>
  )
}

export default App
