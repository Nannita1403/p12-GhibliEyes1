import React from 'react'
import Hero from '../components/Hero/Hero'
import { Box, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
     <Flex objectFit={'cover'}>
        <Box>
        <Hero/>
        </Box>
      </Flex>

    </>
  )
}

export default Home