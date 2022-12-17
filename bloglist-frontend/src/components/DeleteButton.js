import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const DeleteButton = ({blog, user, blogs, setBlogs, id}) => {
  return <button id={id} onClick={() => handleCLick (blog, user, blogs, setBlogs)} >delete</button>
}
DeleteButton.propTypes = {
  blog: PropTypes.object,
  user: PropTypes.object,
  blogs: PropTypes.array,
  setBlogs: PropTypes.func,
  id: PropTypes.string
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