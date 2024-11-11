import React, { useContext } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { ThemeContext } from '../../providers/ThemePageProvider';

const LoginButton = ({ handleOpenLoginForm }) => {
    const {light, setLight} = useContext(ThemeContext);
  return (
    <Box flex={{ base: 1, md: 0 }}
    alignItems={'center'}
    justify={'center'}
    direction={'row'}
    spacing={6}
    marginRight={{md:'60px'}} onClick={handleOpenLoginForm}>
      <Button as={'a'} fontSize={'sl'} fontWeight={600} href={'#'}
                      color={`var(--${light ? "light" : "dark"}-mode-text)`}>
         Sign In
        </Button>
    </Box>
  )
}

export default LoginButton