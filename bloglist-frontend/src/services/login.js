import axios from 'axios'
const baseUrl = '/api/login'

let user = null

const submitLogin = async (username, password) => {
  const user = await axios
    .post(baseUrl,
      {
        username: username,
        password: password
      })
    .catch(error => {
      console.log(error)
    })
    const returnVal = user === undefined
      ? null
      : user
    return returnVal
}



export default {
  user,
  submitLogin
}