import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://tic-tac-toe-itransition-task.onrender.com',
})

export default instance