import React from 'react';
import { Routes, Route } from "react-router-dom";

import Books from '../pages/Books';
import Feed from '../pages/Feed';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/Forgot';
import NotFound from '../pages/404';


export default function Router () {
  return(
      <Routes>
            <Route path="/"/>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="books"element={<Books />} />
            <Route path="feed"element={<Feed />} />
            <Route path="forgot"element={<Forgot />} />
            <Route path="*"element={<NotFound />} />
      </Routes>
  )
};