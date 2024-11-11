import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const WelcomeText = ({ username }) => {
  return (
    <Box display={'flex'} gap={'1vw'} alignItems={'center'} justifyContent={'center'}>
      <Text color={'white'} fontSize={{base:'1vw', md:'2.5vw' }} fontWeight={'300'}>{username}</Text>
      {/* <MenuNav handleLogOut={handleLogOut} /> */}
    </Box>
  )
}

export default WelcomeText