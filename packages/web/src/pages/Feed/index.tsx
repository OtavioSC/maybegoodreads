import React from "react"
import { ChakraProvider } from '@chakra-ui/react'

import Navbar from "../../components/Navbar"
import FeedCard from "../../components/FeedCard"

function Feed() {
  return(
    <ChakraProvider>
      <Navbar/>
      <FeedCard/>
    </ChakraProvider>
  )
}

export default Feed
