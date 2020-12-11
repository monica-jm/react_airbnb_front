import axios from "axios"; 

// Url del back 
const URL = "http://localhost:3000/api"
// Aqui le pedimos que nos guarde la cookie 
axios.defaults.withCredentials = true; 

export const _axios = axios.create({
    baseURL: URL, 
    timeout: 10000
});

