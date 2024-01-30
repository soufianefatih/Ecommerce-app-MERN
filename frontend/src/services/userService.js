import axios from "axios";
const APP_URL = "http://localhost:5050/v1/auth";



export function register() {
    return axios.post(APP_URL + '/register');
  }



