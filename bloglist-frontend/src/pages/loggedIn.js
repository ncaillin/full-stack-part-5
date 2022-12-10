import Blog from '../components/Blog'
import LogoutButton from '../components/LogoutButton'
import NewBlogForm from '../components/NewBlogForm'
import Notification from '../components/Notification'

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
  return (
    <div>
      <h2>blogs</h2>
      <Notification notification={notification} />
      <div>
        <DisplayUser user={user} />
        <LogoutButton setUser={setUser} />
      </div>
      <h2>create new</h2>
      <div>
        <NewBlogForm 
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
  return (
    <div style={{display: 'inline-block'}}>
      {user.name} logged in
    </div>
  )
}


export default LoggedInPage