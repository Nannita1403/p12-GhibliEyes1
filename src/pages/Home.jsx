import React from 'react'
import Hero from '../components/Hero/Hero'
import { Box, Flex } from '@chakra-ui/react'

const Home = () => {
  return (
    <>
     <Flex objectFit={'relative'}h={'100svh'} w={'100%'}  overflowX={'hidden'}>
        <Hero/>
      </Flex>

    </>
  )
}

export default Home