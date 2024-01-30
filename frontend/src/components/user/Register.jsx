import React from 'react'

export default function Register() {
    const[user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        address: '',
        city: '',
        zipCode: ''
    })
    const [error, setError] = useState('')

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
                    <form className="mt-5" >
                        <div className="mb-3">
                            <input type="text" 
                               
                                name="username" id="username"
                                placeholder="Username"
                                className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="email" 
                              
                                name="email" id="email"
                                placeholder="Email"
                                className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="password" 
                               
                                name="password" id="password"
                                placeholder="Password"
                                className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="text" 
                               
                                name="address" id="address"
                                placeholder="Address"
                                className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="text" 
                              
                                name="city" id="city"
                                placeholder="City"
                                className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="text" 
                               
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
