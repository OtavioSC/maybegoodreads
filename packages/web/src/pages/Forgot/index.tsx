import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import Form from "../../components/Form"

import './index.css'

function Forgot() {
  return(
    <ChakraProvider>
      <Navbar login/>
      <div className="content">
        <Form type="forgot"/>
      </div>
    </ChakraProvider>
  )
}

export default Forgot;
