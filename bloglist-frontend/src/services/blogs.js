import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const postBlog = async (
  title,
  author,
  url,
  token
) => {
  const blogObject = {
    title,
    author,
    url
  }
  const config = {
     headers: {
    'Authorization': `Bearer ${token}`
    }
  }
  await axios.post(baseUrl, blogObject, config)
}



export default { getAll, postBlog }