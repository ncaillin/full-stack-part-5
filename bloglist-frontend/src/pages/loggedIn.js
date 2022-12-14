import Blog from '../components/Blog'
import LogoutButton from '../components/LogoutButton'
import NewBlogForm from '../components/NewBlogForm'
import Notification from '../components/Notification'
import Togglable from '../components/Togglable'
import { useRef } from 'react'
import PropTypes from 'prop-types'
import blogService from '../services/blogs'

const LoggedInPage = ({
  blogs, 
  user, 
  setUser,
  setBlogs,
  notification,
  setNotification
}) => {
  
  const blogFormRef = useRef()

  const newBlog = async (title, author, url, token) => {
    await blogService.postBlog(title, author, url, token)
    const blogs = await blogService.getAll()
    setBlogs(blogs)
    setNotification({type: 'info', message: `a new blog ${title} by ${author}`})
    setTimeout(() => {
      setNotification({type: 'info', message: null})
    }, 3000)
  }

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
        <Togglable buttonText={'new blog'} ref={blogFormRef} id={'newblog'}>
          <NewBlogForm 
            user={user}
            newBlog={newBlog}
            blogFormRef={blogFormRef}
          />
        </Togglable>
      </div>
      <div>
        <ListedBlogs blogs={blogs} user={user} setBlogs={setBlogs} />
      </div>
    </div>
  )
}
LoggedInPage.propTypes = {
  blogs: PropTypes.array, 
  user: PropTypes.object, 
  setUser: PropTypes.func,
  setBlogs: PropTypes.func,
  notification: PropTypes.object,
  setNotification: PropTypes.func
}

const ListedBlogs = ({blogs, user, setBlogs}) => {
  console.log('sorting blogs')
  const sortedBlogs = blogs.sort((a,b) => {
    if (a.likes > b.likes) {
      return -1
    }
    if (a.likes < b.likes) {
      return 1
    }
    return 0
  })
  return (
    <div>
      {sortedBlogs.map(blog => {
        return <Blog key={blog.id} blog={blog} user={user} setBlogs={setBlogs} blogs={blogs} />
      })}
    </div>
  )
}
ListedBlogs.propTypes = {
  blogs: PropTypes.array,
  user: PropTypes.object,
  setBlogs: PropTypes.func
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
DisplayUser.propTypes = {
  user: PropTypes.object
}


export default LoggedInPage