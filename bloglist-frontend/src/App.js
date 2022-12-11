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

  const [notification, setNotification] = useState({type: 'info', message: null})

  useEffect(() => { // run once on page load
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
    if (localStorage.user) { // get saved user if exists
      setUser(JSON.parse(localStorage.user))
    }
  }, [])

  const leftStyle = {
    backgroundImage: 'linear-gradient(to right, black , white)',
    width: '25%',
    display:'inline-block',
    position: 'absolute',
    top:'0px',
    bottom:'0px',
    left: '0px'
  }
  const rightStyle = {
    backgroundImage: 'linear-gradient(to left, black , white)',
    width: '25%',
    display:'inline-block',
    position: 'absolute',
    top:'0px',
    bottom:'0px',
    right: '0px'
  }

  return (
    <div style={{textAlign: 'center'}}>
      <div style={leftStyle}>
      </div>
      <div style={{width:'45%', textAlign:'center', margin:'center', display:'inline-block'}}>
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
                notification={notification}
                setNotification={setNotification}
              />
            : <LoggedOutPage
                usernameFieldText={usernameFieldText}
                setUsernameFieldText={setUsernameFieldTest}
                passwordFieldText={passwordFieldText}
                setPasswordFieldText={setPasswordFieldText}
                setUser={setUser}
                notification={notification}
                setNotification={setNotification}
              />
        }
      </div>
      <div style={rightStyle}></div>
    </div>
  )
}

export default App
