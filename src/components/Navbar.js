import '../styling.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-sm bg-body-tertiary fixed-top'>
        <div className='container'>
            <Link to='/' className='navbar-brand logo'> iLOGISTICS </Link>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
            aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Discounts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>
    </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;