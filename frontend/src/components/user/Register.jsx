import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'

export default function Register() {
    const[user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        address: '',
        city: '',
        zipCode: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(state => state.user)

    useEffect(() => {
        if (isLoggedIn) navigate('/')
    }, [])

    const registerUser = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5050/v1/auth/register', user);
          toast.success(response.data.message);
          navigate('/login');
        } catch (error) {
          if (error.response && (error.response.status === 422 || error.response.status === 409 || error.response.status === 500)) {
            setError(error.response.data.message); 
            console.log(setError(error.response.data.message));
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
                            Register
                        </div>
                        <div className="card-body">
                            <form className="mt-5" onSubmit={(e) => registerUser(e)}>
                                <div className="mb-3">
                                    <input type="text" 
                                        onChange={(e) => setUser({
                                            ...user, userName: e.target.value
                                        })}
                                        name="username" id="username"
                                        placeholder="Username"
                                        className='form-control' />
                                        
                                    
                                </div>
                                <div className="mb-3">
                                    <input type="email" 
                                        onChange={(e) => setUser({
                                            ...user, email: e.target.value
                                        })}
                                        name="email" id="email"
                                        placeholder="Email"
                                        className='form-control' />
                                </div>
                                <div className="mb-3">
                                    <input type="password" 
                                        onChange={(e) => setUser({
                                            ...user, password: e.target.value
                                        })}
                                        name="password" id="password"
                                        placeholder="Password"
                                        className='form-control' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" 
                                        onChange={(e) => setUser({
                                            ...user, address: e.target.value
                                        })}
                                        name="address" id="address"
                                        placeholder="Address"
                                        className='form-control' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" 
                                        onChange={(e) => setUser({
                                            ...user, city: e.target.value
                                        })}
                                        name="city" id="city"
                                        placeholder="City"
                                        className='form-control' />
                                </div>
                                <div className="mb-3">
                                    <input type="text" 
                                        onChange={(e) => setUser({
                                            ...user, zipCode: e.target.value
                                        })}
                                        name="zipCode" id="zipCode"
                                        placeholder="Zip Code"
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