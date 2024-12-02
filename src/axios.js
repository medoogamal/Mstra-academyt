import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.mstra.online/api',
  timeout: 10000,
});

export default axiosInstance;