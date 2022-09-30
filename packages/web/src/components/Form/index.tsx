import React, { ReactPropTypes } from 'react'
import { Link } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react'

import logo from '../../assets/logo.png'

import './index.css';

export default function Form(props: { type?: string;}) {
    const { type } = props;

        if (type === 'login') {
          return (
            <FormControl className='form' isRequired>
            <h1 className='title'>Login</h1>
                <FormLabel className="label" style={{ marginTop: "10px"}}>Email</FormLabel>
                    <Input className="input" placeholder='Email' />
                <FormLabel className="label" style={{ marginTop: "10px"}}>Password</FormLabel>
                    <Input className="input" placeholder='Password' />

                    <Button className="button" colorScheme='brown' variant='outline'>Submit</Button>
                    <Button className="button" variant='link'><Link to="/forgot">Forgot password?</Link></Button>
            </FormControl> 
          )
        } 
        
       else if (type === 'signup') {
            return (
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
            )
        }

       else if (type === 'forgot') {
            return (
              <FormControl className='form' isRequired>
              <h1 className='title'>Create new password</h1>
                  <FormLabel className="label" style={{ marginTop: "10px"}}>Email</FormLabel>
                      <Input className="input" placeholder='Email' />
                  <FormLabel className="label" style={{ marginTop: "10px"}}>New password</FormLabel>
                      <Input className="input" placeholder='Password' />
                      <Button className="button" colorScheme='brown' variant='outline'>Submit</Button>
                      <Button className="button" variant='link'><Link to="/">Back to login</Link></Button>
              </FormControl> 
            )
      } 
      else {
        return (
            <h1>Please add a validate form type</h1>
        )
      }
}