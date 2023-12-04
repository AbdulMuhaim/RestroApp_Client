import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000"
})
// import.meta.env.VITE_BACKEND_URL
export default axiosInstance