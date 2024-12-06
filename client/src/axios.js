import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/api', // Replace with your server's URL
})

export default instance
