'use client'

import {
  Box, Flex, Text, IconButton, Button, Stack, Collapse, Image,
  useDisclosure} from '@chakra-ui/react'
import { ThemeContext } from '../../providers/ThemePageProvider';
import { useContext } from 'react';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import Login from '../Login/Login';

const NAV_ITEMS = [
  { label: 'Home', href: '/'},
  { label: 'About', href: '/about'},
  { label: 'Movies', href: '/movies'},
  { label: 'Favorites', href: '/favorites'},
]
export default function MenuToogle() {
  const {light, setLight} = useContext(ThemeContext);

  return (
    <Box>
      <Flex
        position={'absolute'} insetX={'5'}top={'10px'}
        zIndex={'200'}
        minH={'60px'}
        >

        <Flex flex={{ base: '1' }} justify={{ base: 'center', md: 'space-between' }}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={'10'}>
            <DesktopNav/>
          </Flex>
          <Box>
           <Image src={light ? "src/assets/ghibli_logo_black.png" : "src/assets/ghibli_logo_white.png" } 
           w= "140px" position= "center" top="20px" left="90px" mr="150px" 
           alt="Ghibli Studio Logo"/>
          </Box>
        </Flex>

        {/* <Stack
          flex={{ base: 1, md: 0 }} alignItems={'center'}  justify={'center'}  direction={'row'}
          spacing={6} marginRight={{md:'60px'}}>
            <Login/>
             <Button as={'a'} fontSize={'sl'} fontWeight={600} href={'#'}
               color={`var(--${light ? "light" : "dark"}-mode-text)`}>
              Sign In
            </Button>
            <Button as={'a'} display={{ base: 'none', md: 'inline-flex' }} fontSize={'sm'}  fontWeight={600}
              color={`var(--${light ? "light" : "dark"}-mode-bg)`}  bg={`var(--${light ? "light" : "dark"}-mode-text)`}
              href={'/'} _hover={{  bg: '#23311a', }}>
              Sign Up
            </Button> 
        </Stack> */}
        <Flex
          flex={{ base: '1', md: 'auto' }} ml={{ base: '-1' }}
          display={{ base: 'flex', md: 'none' }}
          paddingRight={'40px'}
          alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
          <MobileNav/>
        </Flex>
        <ChangeTheme/>
      </Flex>
    </Box>
  )
}

