import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Prevent redirect for check-auth requests
        if (error.config.url.includes('/check-auth')) {
            return Promise.reject(error);
        }
        
        if (error.response?.status === 401) {
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;