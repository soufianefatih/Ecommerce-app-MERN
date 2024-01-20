import { Link } from 'react-router-dom'

export default function Header() {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"> <i className='fas fa-home'></i> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i> Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"><i className='fas fa-sign-in'></i> Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

