'use client'

import {
  Box, Flex, Text, IconButton, Button, Stack, Collapse, Icon, Popover, PopoverTrigger, 
  PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Image,} from '@chakra-ui/react'
import {
  HamburgerIcon, CloseIcon,ChevronDownIcon, ChevronRightIcon,} from '@chakra-ui/icons'
import { ThemeContext } from '../../providers/ThemePageProvider';
import { useContext } from 'react';
import ChangeTheme from '../ChangeTheme/ChangeTheme';

const NAV_ITEMS = [
  { label: 'Home', href: '/home'},
  { label: 'About', href: '/about'},
  { label: 'Movies', href: '/movies'},
  { label: 'Favorites', href: '/favorites'},
]
export default function MenuToogle() {
  const { isOpen, onToggle } = useDisclosure()
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
          flex={{ base: 1, md: 'auto' }} ml={{ base: -1 }}
          display={{ base: 'flex', md: 'none' }}
          alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
        <Box>
         <Image src={light ? "src/assets/ghibli_logo_black.png" : "src/assets/ghibli_logo_white.png" } 
           w= "100px" position= "center" top="20px" left="90px"
           alt="Ghibli Studio Logo"/>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
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

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const {light, setLight} = useContext(ThemeContext);

  return (
    <Stack direction={'row'} spacing={4} alignContent={'center'} alignItems={'center'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} alignItems={'center'}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={600}
                color={`var(--${light ? "light" : "dark"}-mode-text)`}
                _hover={{
                  textDecoration: 'none',
                  color:'#1D4044',
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

// interface NavItem {
//   label: string
//   subLabel?: string
//   children?: Array<NavItem>
//   href?: string
// }

