import React from "react"
import { 
  ChakraProvider, 
  FormControl, 
  FormLabel, 
  Input, 
  Button } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"

import './index.css'
import { Link } from "react-router-dom"

function Login() {
  return(
    <ChakraProvider>
      <Navbar login/>
      <div className='content'>
      <FormControl className='form' isRequired>
            <h1 className='title'>Login</h1>
                <FormLabel className="label" style={{ marginTop: "10px"}}>Email</FormLabel>
                    <Input className="input" placeholder='Email' />
                <FormLabel className="label" style={{ marginTop: "10px"}}>Password</FormLabel>
                    <Input className="input" placeholder='Password' />

                    <Button className="button" colorScheme='brown' variant='outline'>Submit</Button>
                    <Button className="button" variant='link'><Link to="/forgot">Forgot password?</Link></Button>
            </FormControl> 
      </div>
    </ChakraProvider>
  )
}

export default Login;
