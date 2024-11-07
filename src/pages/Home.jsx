import React from 'react'
import Hero from '../components/Hero/Hero'
import { Box, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
     <Flex objectFit={'relative'} w={'100%'} h={'100svh'} overflowX={'hidden'}>
        <Hero/>
      </Flex>

    </>
  )
}

export default Home