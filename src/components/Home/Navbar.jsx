import React from 'react'
import { Link , NavLink, useNavigate} from 'react-router-dom'

 function Navbar() {

 const navigate = useNavigate();

  return (
    <>
    <nav>

    <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
    </div>

    <div className="nav-links">

   

    {/* <Link to="/home" className='nav-link'>Home</Link>
    <Link to="/menu" className='nav-link'>Menu</Link>
    <Link to="/contact" className='nav-link'>Contact</Link>
    <Link to="/about" className='nav-link'>About</Link> */}

    <NavLink to="/home" className='nav-link'>Home</NavLink>
    {/* <NavLink to="/menu" className='nav-link'>Menu</NavLink> */}
    <NavLink to="/contact" className='nav-link'>Contact</NavLink>
    <NavLink to="/about" className='nav-link'>About</NavLink>
    <NavLink to="/login" className='nav-link'></NavLink>
    <NavLink to="/signup" className='nav-link'></NavLink>
    

    </div>

    <div className="nav-button">
        <button onClick={()=>navigate("/login")}>Login</button>
        <button onClick={()=>navigate("/signup")}>Sign up</button>
    </div>

    </nav>
    </>
  )
}
export default Navbar