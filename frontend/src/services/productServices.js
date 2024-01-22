import axios from "axios";
const APP_URL = "http://localhost:5050/v1/product";



export function getAllproducts() {
    return axios.get(APP_URL);
  }


  export function getOneproduct(id) {
    return axios.get(APP_URL + "/category/" + id);
  }

