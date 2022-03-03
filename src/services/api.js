import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://terca-api.herokuapp.com/',
})

export default api
