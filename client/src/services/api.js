import axios from 'axios'

const baseURL = process.env.SERVER_URL

const api = axios.create({
    baseURL,
})

export default api
