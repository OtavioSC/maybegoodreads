import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import BookCard from "../../components/BookCard"

function Home() {
  return(
    <ChakraProvider>
      <Navbar/>
      <BookCard/>
    </ChakraProvider>
  )
}

export default Home;
