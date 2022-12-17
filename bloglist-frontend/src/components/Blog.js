
import Toggleable from '../components/Togglable'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
import PropTypes from 'prop-types'
import blogService from '../services/blogs'

const Blog = ({blog, user, setBlogs, blogs}) => {
  const outerStyle = {
    width: '95%',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '0.5%',
    marginBottom: '0.5%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '7px',
    backgroundColor: 'lightgrey'
  }
  const blogTitleStyle = {
    width: '69.75%',
    padding: '0px',
    display: 'inline-block',
    backgroundColor: 'lightgrey',
    marginRight: '0.25%',
    borderRadius: '5px 0px 0px 5px'
  }
  const blogAuthorStyle = {
    width: '30%',
    padding: '0px',
    display: 'inline-block',
    backgroundColor: 'lightgrey',
    borderRadius: '0px 5px 5px 0px'
  }
  return (
    <div style={outerStyle}>
      <div style={blogTitleStyle}>
        {blog.title}
      </div>
      <div style={blogAuthorStyle}>
        {blog.author}
      </div>
      <Toggleable buttonText={'view'} hideText={'hide'} >
        <p>url: {blog.url}</p>
        <p style={{display:'inline-block'}}>likes: {blog.likes}</p>
        <LikeButton id={`${blog.id}-likes`} handleClick={() => handleClick(blog, user, blogs, setBlogs)} />
        <p>poster: {blog.user.name}</p>
        {blog.user.username === user.username
          ? <DeleteButton id={`${blog.id}-delete`} blog={blog} user={user} blogs={blogs} setBlogs={setBlogs} />
          : null
        }
      </Toggleable>
    </div> 
  ) 
}
Blog.propTypes = {
  blog: PropTypes.object,
  user: PropTypes.object,
  setBlogs: PropTypes.func,
  blogs: PropTypes.array
}

const handleClick = (blog, user, blogs, setBlogs) => {
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

export default Blog