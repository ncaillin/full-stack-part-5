import { useState, useEffect } from 'react'
import LoggedInPage from './pages/loggedIn'
import LoggedOutPage from './pages/loggedOut'
import blogService from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [usernameFieldText, setUsernameFieldTest] = useState('username')
  const [passwordFieldText, setPasswordFieldText] = useState('password')
  const [user, setUser] = useState(null)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => { // run once on page load
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
    if (localStorage.user) { // get saved user if exists
      setUser(JSON.parse(localStorage.user))
    }
  }, [])

  return (
    <div>
      {
        user !== null
          ? <LoggedInPage
              blogs={blogs}
              user={user}
              setUser={setUser}
              title={title}
              setTitle={setTitle}
              author={author}
              setAuthor={setAuthor}
              url={url}
              setUrl={setUrl}
              setBlogs={setBlogs}
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
