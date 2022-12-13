import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const LikeButton = ({blog, user, blogs, setBlogs}) => {
  return (
    <div style={{display: 'inline-block'}}>
      <button onClick={() => handleClick(blog, user, blogs, setBlogs)}>like</button>
    </div>
  )
}
LikeButton.propTypes = {
  blog: PropTypes.object,
  user: PropTypes.object,
  blogs: PropTypes.array,
  setBlogs: PropTypes.func
}

const handleClick = (blog, user, blogs, setBlogs) => {
  console.log(blog)
  console.log(user)
  blogService.putBlog(
    {
      blogID: blog.id,
      token: user.token,
      likes: blog.likes + 1
    }
  )
  const updatedBlogs = blogs.map(b => {
    if (b.id === blog.id) {
      return {...b, likes: b.likes + 1}
    } else {
      return b
    }
  })
  setBlogs(updatedBlogs)
}

export default LikeButton