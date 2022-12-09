import TextField from './TextField'
import blogService from '../services/blogs'

const NewBlogForm = ({
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
  user,
  setBlogs
}) => {
  return (
    <form onSubmit={event => handleSubmit(event, user, setBlogs)}>
      <TextField text={"title: "} val={title} setVal={setTitle} />
      <TextField text={"author: "} val={author} setVal={setAuthor} />
      <TextField text={"url: "} val={url} setVal={setUrl} />
      <button type="submit">post</button>
    </form>
  )
}
const handleSubmit = async (event, user, setBlogs) => {
  event.preventDefault()
  const title = event.target[0].value
  const author = event.target[1].value
  const url = event.target[2].value
  await blogService.postBlog(title, author, url, user.token)
  const blogs = await blogService.getAll()
  setBlogs(blogs)
  
}

export default NewBlogForm