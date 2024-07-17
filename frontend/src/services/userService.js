import axios from 'axios';
const APP_URL = "http://localhost:5050/v1/auth/user";

axios.defaults.headers = {
    'Content-Type': 'application/json',
    "auth-token": window.localStorage.getItem("token") ?? ''
}

export function login(data) {
    return axios.post(APP_URL + 'login',data);
}

