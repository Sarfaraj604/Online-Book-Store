import axios from 'axios';
const APP_URL = import.meta.env.VITE_API_URL ;
const axiosInstance = axios.create({
    baseURL: `${APP_URL}/api/payment/verify`,
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