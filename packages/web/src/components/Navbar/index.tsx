import './index.css'

import logo from '../../assets/logo.png'

import { Outlet, Link } from "react-router-dom";

export default function Navbar(props: {login?: boolean}){
   const { login } = props;

    return(
       <header className='menu'>
         <div className='menu-container'>
            <Link to="/login" className="menu-logo"><img src={logo} alt="maybeGoodReads"/></Link>
            <nav className='menu-nav'>
               { !login ? (<ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/books">My Books</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
               </ul>) : (<ul>
                  <li><Link to="/signup">Sign Up</Link></li>
               </ul>)}
            </nav>
         </div>
         <Outlet />
       </header>
    )
}