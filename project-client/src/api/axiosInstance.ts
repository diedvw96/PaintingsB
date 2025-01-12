import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5041/', 
});

export default axiosInstance;