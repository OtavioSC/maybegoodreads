import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from './pages/Books';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';

export default function App () {
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navbar login/>}>
          <Route path="books" element={<Books />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};