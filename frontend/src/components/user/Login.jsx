
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, setLoggedInOut, setToken } from '../../redux/slices/userSlice'
import {login} from "../../services/userService";



export default function Login() {

  const[user, setUser] = useState({
        email: '',
        password: ''
       
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoggedIn } = useSelector(state => state.user)

  useEffect(()=>{

    if (isLoggedIn) navigate('/')

  },[])



    const loginUser = async (e) => {
        e.preventDefault();
        try {
          const response = await login(user);
          const { accessToken } = response.data;
          sessionStorage.setItem('Authorization', JSON.stringify(accessToken));
          dispatch(setLoggedInOut(true))
          dispatch(setToken(response.data.token))     
          dispatch(setCurrentUser(response.data.user))
          toast.success(response.data.status);
          navigate('/');
        } catch (error) {
          if (error.response && (error.response.status === 404 || error.response.status === 401 || error.response.status === 500)) {
            setError(error.response.data.message); 
          } else {
            toast.error('An error occurred during registration.');
            console.error(error);
          }
        }
      };
      
  return (
    <div className='container p-1'>
        <div className="row my-5">
            <div className="col-md-6 mx-auto">
                {
                   error && <div className="alert alert-danger my-2">
                   { error }
                  </div>
                }
                <div className="card">
                    <div className="card-header text-center mt-2 bg-white">
                        Login
                    </div>
                    <div className="card-body">
                        <form className="mt-5" onSubmit={(e) => loginUser(e)} >
                        
                            <div className="mb-3">
                                <input type="email"  onChange={(e) => setUser({
                                            ...user, email: e.target.value
                                        })}
                                  
                                    name="email" id="email"
                                    placeholder="Email"
                                    className='form-control' />
                            </div>
                            <div className="mb-3">
                                <input type="password"  onChange={(e) => setUser({
                                            ...user, password: e.target.value
                                        })}
                                   
                                    name="password" id="password"
                                    placeholder="Password"
                                    className='form-control' />
                            </div>
                                         
                            <div className="mb-3">
                                <button type="submit" className="btn btn-sm btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
