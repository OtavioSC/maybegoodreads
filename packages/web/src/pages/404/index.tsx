import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import Form from "../../components/Form"


function NotFound() {
  return(
    <ChakraProvider>
      <Navbar login/>
      <div className='content'>
        <h1> Página não encontrada 🪲 </h1>
      </div>
    </ChakraProvider>
  )
}

export default NotFound;
