import axios from 'axios'

const REACT_APP_URL = process.env.REACT_APP_URL || 'http://localhost:5000'

const instance = axios.create({
    baseURL: REACT_APP_URL,
})

export default instance