import axios from 'axios'
//so i can fetch data from any react component
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api