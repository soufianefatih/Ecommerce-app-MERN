
import axios from 'axios';
const APP_URL = "http://localhost:5050/v1/auth/";

// Configure default headers
axios.defaults.headers = {
    'Content-Type': 'application/json',
    "auth-token": window.localStorage.getItem("token") ?? ''  // localStorage as a fallback
};

// Function to login a user (post request)
export function login(data) {
    return axios.post(APP_URL, data);
}

// Function to fetch logged-in user details
export async function fetchLoggedInUser(token) {
    const config = {
        headers: {
            "Authorization": `${token}`
        }
    };
    return axios.get(APP_URL +"user", config);
}

