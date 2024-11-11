import React from 'react'
import UserIcon from '../../assets/user.png'
import { Box, Image } from '@chakra-ui/react'

const LoginButton = ({ handleOpenLoginForm }) => {
  return (
    <Box w={'auto'} h={'100%'} onClick={handleOpenLoginForm}>
      <Image w={'100%'} h={'100%'} src={UserIcon} alt='user Icon' />
    </Box>
  )
}

export default LoginButton