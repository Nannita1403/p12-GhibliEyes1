import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemePageProvider';

const Footer = () => {
  const {light, setLight} = useContext(ThemeContext);
  return (
    <Box 
    minH={'60px'}
    position={'relative'} zIndex={'200'} insetX={'5'}
    fontWeight={'bold'}  color={`var(--${light ? "light" : "dark"}-text-about)`} >
      <Container
        as={Stack}  maxW={'6xl'} py={4}  direction={{ base: 'column', md: 'row' }}  spacing={4}
        justify={ 'center'}  align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'}>
            Home
          </Box>
          <Box as="a" href={'/about'}>
            About
          </Box>
          <Box as="a" href={'/movies'}>
            Movies
          </Box>
          <Box as="a" href={'/favorites'}>
            Favorites
          </Box>
        </Stack>
        <Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default Footer;