import React, {useState}from 'react';
import { BrowserRouter } from "react-router-dom";

import Router from './routes/routes';

export default function App () {

 const [isLoggedIn, setisLoggedIn] = useState(true);
 const logIn = () => { setisLoggedIn(true); };
  return(
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  )
};