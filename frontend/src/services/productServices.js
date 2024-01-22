import axios from "axios";
const APP_URL = "http://localhost:5050/v1/product";



export function getAllproducts() {
    return axios.get(APP_URL);
  }


  export function getcategorybyAllProducts(id) {
    return axios.get(APP_URL + "/category/" + id);
  }

  export function getOneProducts(id) {
    return axios.get(APP_URL +"/"+ id);
  }

