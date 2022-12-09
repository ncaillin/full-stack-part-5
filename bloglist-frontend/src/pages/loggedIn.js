import Blog from '../components/Blog'
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
    <div>
      {user.name} logged in
    </div>
  )
}

const LoggedInPage = ({blogs, user}) => {
  return (
    <div>
      <DisplayUser user={user} />
      <p></p>
      <ListedBlogs blogs={blogs} />
    </div>
  )
}

export default LoggedInPage