import TextField from './TextField'
import { useState } from 'react'
import PropTypes from 'prop-types'

const NewBlogForm = ({
  user,
  newBlog,
  blogFormRef
}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
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
      <form onSubmit={event => handleSubmit(event, title, author, url, user, newBlog, blogFormRef)}>
        <TextField text={'title: '} val={title} setVal={setTitle} placeholder={'title'} />
        <TextField text={'author: '} val={author} setVal={setAuthor} placeholder={'author'} />
        <TextField text={'url: '} val={url} setVal={setUrl} placeholder={'url'}/>
        <button style={buttonStyle} type="submit">post</button>
      </form>
    </div>
  )
}
NewBlogForm.propTypes = {
  user: PropTypes.object,
  blogFormRef: PropTypes.any,
  handleSubmitTest: PropTypes.func,
  newBlog: PropTypes.func,
}
const handleSubmit = async (event, title, author, url, user, newBlog, blogFormRef) => {
  blogFormRef.current.toggleVisible()
  event.preventDefault()
  const token = user.token
  await newBlog(title, author, url, token)
}

export default NewBlogForm