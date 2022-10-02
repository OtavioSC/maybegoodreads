import React from "react"
import { Link } from "react-router-dom"
import { 
  ChakraProvider, 
  FormControl, 
  FormLabel, 
  Input,
  Button } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"

import './index.css'

function Forgot() {
  return(
    <ChakraProvider>
      <Navbar login/>
      <div className="content">
      <FormControl className='form' isRequired>
              <h1 className='title'>Create new password</h1>
                  <FormLabel className="label" style={{ marginTop: "10px"}}>Email</FormLabel>
                      <Input className="input" placeholder='Email' />
                  <FormLabel className="label" style={{ marginTop: "10px"}}>New password</FormLabel>
                      <Input className="input" placeholder='Password' />
                      <Button className="button" colorScheme='brown' variant='outline'>Submit</Button>
                      <Button className="button" variant='link'><Link to="/">Back to login</Link></Button>
              </FormControl> 
      </div>
    </ChakraProvider>
  )
}

export default Forgot;
