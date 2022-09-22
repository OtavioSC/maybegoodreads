import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'

import { 
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

import App from './App'
import Books from './pages/Books/index'

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "/books", element: <Books/> }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
