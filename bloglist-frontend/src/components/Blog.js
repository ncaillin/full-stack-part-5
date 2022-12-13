
import Toggleable from '../components/Togglable'
import LikeButton from './LikeButton'
import DeleteButton from './DeleteButton'
import PropTypes from 'prop-types'

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
        <LikeButton blog={blog} user={user} setBlogs={setBlogs} blogs={blogs} />
        <p>poster: {blog.user.name}</p>
        {blog.user.username === user.username
          ? <DeleteButton blog={blog} user={user} blogs={blogs} setBlogs={setBlogs} />
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

export default Blog