import { createSlice } from "@reduxjs/toolkit"

const initialState = {

   isLoggedIn : JSON.parse(sessionStorage.getItem('Authorization')) ? true : false,
   token : JSON.parse(sessionStorage.getItem('Authorization')) || '',
   user:null

}

export const userSlice = createSlice({

 name : 'user',
 initialState,
 reducers: {
  
    setCurrentUser(state, action) {
        state.user = action.payload
    },
    setLoggedInOut(state, action) {
        state.isLoggedIn = action.payload
    },
    setToken(state, action) {
        state.token = action.payload
    }



 }


})

const userReducer = userSlice.reducer
export const { setCurrentUser, setLoggedInOut, setToken} = userSlice.actions

export default userReducer