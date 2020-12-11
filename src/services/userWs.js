// Importamos nuestro axios 
import {_axios } from './api';

export const login = (data) =>{
    //Le pasamos la ruta y los elementos que le vamos a compartir
    return _axios.post("/user/login", data)
}

export const signup = (data) => {
    return _axios.post("/user/signup", data)
}

export const logout = () => {
    return _axios.post("/user/logout")
}