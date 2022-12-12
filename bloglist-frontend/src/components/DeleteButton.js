import blogService from '../services/blogs'

const DeleteButton = ({blog, user, blogs, setBlogs}) => {
  return <button onClick={() => handleCLick (blog, user, blogs, setBlogs)} >delete</button>
}

const handleCLick = async (blog, user, blogs, setBlogs) => {
  const token = user.token
  const blogID = blog.id
  if (window.confirm(`delete ${blog.title} by ${blog.author}?`)) {
    await blogService.deleteBlog(token, blogID)
    const updatedBlogs = blogs.filter(b => {
      return b.id !== blog.id
    })
    setBlogs(updatedBlogs)
  }
}
export default DeleteButton