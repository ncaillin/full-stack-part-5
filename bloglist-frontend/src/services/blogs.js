import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  console.log('OK')
  const request = await axios.get(baseUrl)
  console.log(request)
  return request.data
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

const putBlog = async ({
  blogID,
  token,
  likes
}) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const blogObject = {
    likes
  }
  console.log(`${baseUrl}/${blogID}`)
  await axios.put(`${baseUrl}/${blogID}`,blogObject, config)
  console.log('put done')
}

const deleteBlog = async (token, blogID) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  await axios.delete(`${baseUrl}/${blogID}`, config)
}

export default { getAll, postBlog, putBlog, deleteBlog }