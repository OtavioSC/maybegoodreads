import React, { ReactPropTypes } from 'react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react'

import './index.css';

export default function Form(props: { login?: boolean;}) {
    const { login } = props;

    return(
        <>
        { login ? (
        <FormControl style={{maxWidth: "960px", margin: "0 auto", padding: "40px 0"}} isRequired>
            <h1 className='title'>Login</h1>
            <FormLabel className="label" style={{ marginTop: "10px"}}>Email</FormLabel>
                <Input className="input" placeholder='Email' />
            <FormLabel className="label" style={{ marginTop: "10px"}}>Password</FormLabel>
                <Input className="input" placeholder='Password' />
                <Button className="button" colorScheme='brown' variant='outline'>Login</Button>
        </FormControl> )
        : ( <FormControl className='form' isRequired>
            <h1 className='title'>Create Account</h1>
            <FormLabel className="label">Your Name</FormLabel>
                <Input className="input" placeholder='Your name' />
                
            <FormLabel className="label">Email</FormLabel>
                <Input className="input" placeholder='Email' />

            <FormLabel className="label">Password</FormLabel>
                <Input className="input" placeholder='Password' />

            <FormLabel className="label">Re-enter password</FormLabel>
                <Input className="input" placeholder='Re-enter password' />

                <Button className="button" colorScheme='orange' variant='outline'>Create Account</Button>
            </FormControl>
         )}
        </>
    )
}