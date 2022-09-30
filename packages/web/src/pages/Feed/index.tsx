import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"

function Feed() {
  return(
    <ChakraProvider>
      <Navbar/>
    </ChakraProvider>
  )
}

export default Feed
