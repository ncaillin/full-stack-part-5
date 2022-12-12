
import Toggleable from '../components/Togglable'

const Blog = ({blog}) => {
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
        <p>likes: {blog.likes}
          <button>like</button>
        </p>
        <p>poster: {blog.user.name}</p>
      </Toggleable>
    </div> 
  ) 
}

export default Blog