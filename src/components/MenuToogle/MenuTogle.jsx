'use client'

import {
  Box, Flex, Text, IconButton, Button, Stack, Collapse, Image,
  useDisclosure} from '@chakra-ui/react'
import {
  HamburgerIcon, CloseIcon,ChevronDownIcon, ChevronRightIcon,} from '@chakra-ui/icons'
import { ThemeContext } from '../../providers/ThemePageProvider';
import { useContext } from 'react';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

const NAV_ITEMS = [
  { label: 'Home', href: '/'},
  { label: 'About', href: '/about'},
  { label: 'Movies', href: '/movies'},
  { label: 'Favorites', href: '/favorites'},
]
export default function MenuToogle() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const {light, setLight} = useContext(ThemeContext);

  return (
    <Box>
      <Flex
        position={'absolute'}
        insetX={'5'}
        top={'10px'}
        zIndex={'200'}
        minH={'60px'}
        >
        <Flex
          flex={{ base: '1', md: 'auto' }} ml={{ base: '-1' }}
          display={{ base: 'flex', md: 'none' }}
          alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
          <MobileNav/>
        </Flex>
        <Flex flex={{ base: '1' }} justify={{ base: 'center', md: 'space-around' }}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={'10'}>
            <DesktopNav/>
          </Flex>
          <Box>
           <Image src={light ? "src/assets/ghibli_logo_black.png" : "src/assets/ghibli_logo_white.png" } 
           w= "140px" position= "center" top="20px" left="90px"
           alt="Ghibli Studio Logo"/>
          </Box>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          alignItems={'center'}
          justify={'center'}
          direction={'row'}
          spacing={6}
          marginRight={'60px'}>
          <Button as={'a'} fontSize={'sl'} fontWeight={600} variant={'link'} href={'#'}
                      color={`var(--${light ? "light" : "dark"}-mode-text)`}>
            Sign In
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={`var(--${light ? "light" : "dark"}-mode-bg)`}
            bg={`var(--${light ? "light" : "dark"}-mode-text)`}
            href={'#'}
            _hover={{
              bg: '#23311a',
            }}>
            Sign Up
          </Button>
        </Stack>
        <ChangeTheme/>
      </Flex>



    </Box>
  )
}

// interface NavItem {
//   label: string
//   subLabel?: string
//   children?: Array<NavItem>
//   href?: string
// }

