import { Menu } from 'antd';
import './index.css'

import logo from '../../assets/logo.png'

export default function Navbar(){
    return(
       <header className='menu'>
         <div className='menu-container'>
            <a className="menu-logo" href="#"><img src={logo} alt="maybeGoodReads"/></a>
            <nav className='menu-nav'>
               <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">My Books</a></li>
                  <li><a href="#">Profile</a></li>
               </ul>
            </nav>
         </div>
       </header>
    )
}