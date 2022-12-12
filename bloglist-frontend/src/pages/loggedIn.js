import Blog from '../components/Blog'
import LogoutButton from '../components/LogoutButton'
import NewBlogForm from '../components/NewBlogForm'
import Notification from '../components/Notification'
import Togglable from '../components/Togglable'
import { useRef, useEffect } from 'react'
import blogService from '../services/blogs'

const LoggedInPage = ({
  blogs, 
  user, 
  setUser,
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
  setBlogs,
  notification,
  setNotification
}) => {
  
  const blogFormRef = useRef()

  const outerLoginStyle = {
    width: '95%',
    textAlign: 'center',
    margin: 'auto',
    lineHeight: '200%'
  }


  return (
    <div>
      <h2>blogs</h2>
      <Notification notification={notification} />
      <div style={outerLoginStyle}>
        <DisplayUser user={user} />
        <LogoutButton setUser={setUser} />
      </div>
      <div>
        <Togglable buttonText={'new blog'} ref={blogFormRef}>
          <NewBlogForm 
            blogRef={blogFormRef}
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            url={url}
            setUrl={setUrl}
            user={user}
            setBlogs={setBlogs}
            setNotification={setNotification}
          />
        </Togglable>
      </div>
      <div>
        <ListedBlogs blogs={blogs} />
      </div>
    </div>
  )
}

const ListedBlogs = ({blogs}) => {
  return (
    <div>
      {blogs.map(blog => {
        return <Blog key={blog.id} blog={blog} />
      })}
    </div>
  )
}
const DisplayUser = ({user}) => {
  const style = {
    width: '69.6%',
    backgroundColor: 'lightgrey',
    display: 'inline-block',
    borderRadius: '10px 0px 0px 10px',
    borderStyle: 'solid',
    borderWidth: '1px'
  }
  return (
    <div style={style}>
      {user.name} logged in
    </div>
  )
}


export default LoggedInPage