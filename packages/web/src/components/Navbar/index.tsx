import './index.css'

import logo from '../../assets/logo.png'

import { Outlet, Link } from "react-router-dom";

export default function Navbar(props: {login?: boolean}){
   const { login } = props;

    return(
       <header className='menu'>
         <div className='menu-container'>
            <a className="menu-logo"><img src={logo} alt="maybeGoodReads"/></a>
            <nav className='menu-nav'>
               { !login ? (<ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/books">My Books</Link></li>
                  <li><Link to="/feed">Feed</Link></li>
                  <li><Link to="/">Logout</Link></li>
               </ul>) : (<ul>
                  <li><Link to="/signup">Sign Up</Link></li>
               </ul>)}
            </nav>
         </div>
         <Outlet />
       </header>
    )
}