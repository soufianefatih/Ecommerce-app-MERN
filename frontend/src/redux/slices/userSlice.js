import { createSlice } from "@reduxjs/toolkit"

const initialState = {

   isLoggedIn : JSON.parse(sessionStorage.getItem('Authorization')) ? true : false,
   token : JSON.parse(sessionStorage.getItem('Authorization')) || '',
   user:null

}

export const userSlice = createSlice({

 name : 'user',
 initialState,
 reducers: {}


})

const userReducer = userSlice.reducer

export default userReducer