import Blog from '../components/Blog'
import LogoutButton from '../components/LogoutButton'

const LoggedInPage = ({blogs, user, setUser}) => {
  return (
    <div>
      <h2>blogs</h2>
      <div>
        <DisplayUser user={user} />
        <LogoutButton setUser={setUser} />
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