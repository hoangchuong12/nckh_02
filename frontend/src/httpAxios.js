
import axios from 'axios';
import { urlAPI } from './config';

const httpAxios = axios.create({
    baseURL: urlAPI,
    headers: { "x-Custom-Header": "foobar"},
});
httpAxios.interceptors.response.use((response) => {
    return response.data;
})

export default httpAxios;