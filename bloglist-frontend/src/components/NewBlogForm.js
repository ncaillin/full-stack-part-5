import TextField from './TextField'
import blogService from '../services/blogs'
import { useState } from 'react'
import PropTypes from 'prop-types'

const NewBlogForm = ({
  user,
  setBlogs,
  setNotification,
  blogRef
}) => {
  const [title, setTitle] = useState('title')
  const [author, setAuthor] = useState('author')
  const [url, setUrl] = useState('url')
  const buttonStyle = {
    width:'20%',
  }
  const formStyle = {
    textAlign: 'center',
    borderStyle: 'dashed',
    marginLeft: '2%',
    marginRight: '2%',
    borderColor: 'lightgrey',
    borderRadius: '30px',
    borderWidth: '2px',
    marginTop: '5px',
    marginBottom: '10px',
    paddingBottom: '10px'
  }
  return (
    <div style={formStyle}>
      <h2>create new</h2>
      <form onSubmit={event => handleSubmit(event, user, setBlogs, setNotification, blogRef)}>
        <TextField text={'title: '} val={title} setVal={setTitle} />
        <TextField text={'author: '} val={author} setVal={setAuthor} />
        <TextField text={'url: '} val={url} setVal={setUrl} />
        <button style={buttonStyle} type="submit">post</button>
      </form>
    </div>
  )
}
NewBlogForm.propTypes = {
  user: PropTypes.object.isRequired,
  setBlogs: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  blogRef: PropTypes.any.isRequired
}
const handleSubmit = async (event, user, setBlogs, setNotification, blogRef) => {
  event.preventDefault()
  blogRef.current.toggleVisible()
  const title = event.target[0].value
  const author = event.target[1].value
  const url = event.target[2].value
  await blogService.postBlog(title, author, url, user.token)
  const blogs = await blogService.getAll()
  setBlogs(blogs)
  setNotification({type: 'info', message: `a new blog ${title} by ${author}`})
  setTimeout(() => {
    setNotification({type: 'info', message: null})
  }, 3000)
}

export default NewBlogForm