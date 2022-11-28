import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://itransition6-messenger-production.up.railway.app/',
})

export default instance