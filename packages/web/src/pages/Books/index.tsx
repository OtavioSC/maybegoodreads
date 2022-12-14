import React from "react"
import { ChakraProvider,
         Box,
         Image,
         Badge, 
         Button} from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import BookCard from "../../components/BookCard"

function Books() {
 
  return(
    <ChakraProvider>
      <Navbar/>
      <BookCard/>
    </ChakraProvider>
  )
}

export default Books
