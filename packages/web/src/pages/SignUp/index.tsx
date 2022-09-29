import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import Form from "../../components/Form"

import './index.css'

function SignUp() {
    return(
      <ChakraProvider>
        <div className="content">
          <Form login={false}/>
        </div>
      </ChakraProvider>
    )
}

export default SignUp;
