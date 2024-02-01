import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentUser, setLoggedInOut, setToken } from '../../redux/slices/userSlice'
import axios from 'axios'
import './style.css'
import logo from '../../../public/images/Online.svg'
export default function Navbar() {

  const { cartItems } = useSelector(state => state.cart)
  const { token, isLoggedIn, user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
      const getLoggedInUser = async () => {
          const config = {
              headers: {
                  "Content-type": "application/json",
                  "Authorization": `${token}`
              }
          }
          try {
              const response = await axios.get('http://localhost:5050/v1/auth/user'
              , config)
              dispatch(setCurrentUser(response.data.user))
          } catch (error) {
              if(error?.response?.status === 401) {
                  sessionStorage.removeItem('currentToken')   
                  dispatch(setLoggedInOut(false))
                  dispatch(setToken(''))     
              }
              console.log(error);
          }
      }
      if (token) getLoggedInUser()
  }, [token])

  return (



  <header className="header" data-header>
  <div className="container">
    <Link to="/" className="logo">
      <img src={logo} alt="Casmart logo" width={130} height={70} />
    </Link>
    <div className="overlay" data-overlay />
    <div className="header-search">
      <input type="search" name="search" placeholder="Search Product..." className="input-field" />
      <button className="search-btn" aria-label="Search">
        <ion-icon name="search-outline" />
      </button>
    </div>
    <div className="header-actions">
  
      {/* <button className="header-action-btn">
        <ion-icon name="search-outline" aria-hidden="true" />
        <p className="header-action-label">Search</p>
      </button> */}
      
     <Link to="/cart"><button className="header-action-btn">
        <ion-icon name="cart-outline" aria-hidden="true" />
       <p className="header-action-label">Cart</p>
        <div className="btn-badge green" aria-hidden="true">{cartItems.length}</div>
      </button> </Link>

      <Link to= '/register'> <button className="header-action-btn">
        <ion-icon name="person-outline" aria-hidden="true" />
        <p className="header-action-label">Sign in</p>
      </button> </Link>
       <Link to= '/login'> <button className="header-action-btn">
        <ion-icon name="enter-outline" aria-hidden="true" ></ion-icon>
        <p className="header-action-label">Sign in</p>
      </button> </Link>
   
    </div>
    <button className="nav-open-btn" data-nav-open-btn aria-label="Open Menu">
      <span />
      <span />
      <span />
    </button>
    <nav className="navbar" data-navbar>
      <div className="navbar-top">
        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" alt="Casmart logo" width={130} height={31} />
        </a>
        <button className="nav-close-btn" data-nav-close-btn aria-label="Close Menu">
          <ion-icon name="close-outline" />
        </button>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to='/' className="navbar-link">Home</Link>
        </li>
        <li>
          <a href="#" className="navbar-link">Shop</a>
        </li>
        <li>
          <a href="#" className="navbar-link">About</a>
        </li>
        <li>
          <a href="#blog" className="navbar-link">Blog</a>
        </li>
        <li>
          <a href="#" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>





  )
}


