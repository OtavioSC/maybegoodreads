import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import Form from "../../components/Form"

import './index.css'

function Login() {
  return(
    <ChakraProvider>
      <Navbar login/>
      <div className='content'>
        <Form type='login'/>
      </div>
    </ChakraProvider>
  )
}

export default Login;
