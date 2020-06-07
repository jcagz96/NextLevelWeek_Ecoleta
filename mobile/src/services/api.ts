import axios, { AxiosInstance } from 'axios';
import HOST from '../../dotenv';


const api: AxiosInstance = axios.create({
    baseURL: HOST
});


export default api;