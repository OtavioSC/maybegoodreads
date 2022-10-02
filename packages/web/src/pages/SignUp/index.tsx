import React from 'react'
import { Link } from 'react-router-dom'

import { 
  ChakraProvider,
  FormControl, 
  FormLabel, 
  Input, 
  Button } from '@chakra-ui/react'

import './index.css'

function SignUp() {
    return(
      <ChakraProvider>
        <div className='content'>
        <FormControl className='form' isRequired>
                <h1 className='title'>Create Account</h1>
                <FormLabel className="label">Your Name</FormLabel>
                    <Input className="input" placeholder='Your name' />
                    
                <FormLabel className="label">Email</FormLabel>
                    <Input className="input" placeholder='Email' />

                <FormLabel className="label">Password</FormLabel>
                    <Input className="input" placeholder='Password' />

                <FormLabel className="label">Re-enter password</FormLabel>
                    <Input className="input" placeholder='Re-enter password' />

                    <Button className="button" colorScheme='brown' variant='outline'>Create Account</Button>
                    <Button className="button" variant='link'><Link to="/">Back to login</Link></Button>
                </FormControl>
        </div>
      </ChakraProvider>
    )
}

export default SignUp;
