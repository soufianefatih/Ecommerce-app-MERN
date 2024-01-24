import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import './style.css'
export default function Header() {

  const { cartItems } = useSelector(state => state.cart)

  return (




<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand logo" to="/">E-commerce</Link>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav me-auto mb-2 mt-2 mx-auto ">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">featured</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">review</Link>
        </li>
      </ul>  
      <div className="icons ">
        <a href="#" className="fas fa-heart" />
        { cartItems.length == 0 ?  <Link to="/cart" className="fas fa-shopping-cart" /> 
                           :     <Link to="/cart" className="fas fa-shopping-cart" > ({cartItems.length})</Link>
        }
    <a href="#" className="fas fa-user" />
     </div>  
    </div>
  </div>
</nav>





  )
}


