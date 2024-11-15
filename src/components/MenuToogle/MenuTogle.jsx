
import {
  Box, Flex, Image,} from '@chakra-ui/react'
import { ThemeContext } from '../../providers/ThemePageProvider';
import { useContext } from 'react';
import ChangeTheme from '../ChangeTheme/ChangeTheme';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';


const NAV_ITEMS = [
  { label: 'Home', href: '/'},
  { label: 'About', href: '/about'},
  { label: 'Movies', href: '/movies'},

]
export default function MenuToogle() {
  const {light, setLight} = useContext(ThemeContext);

  return (
    <Box>
      <Flex
        position={'absolute'} insetX={'5'}top={'10px'} zIndex={'200'} minH={'60px'} >
        <Flex flex={{ base: '1' }} justify={{ base: 'center', md: 'space-around' }}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={'10'}>
            <DesktopNav/>
          </Flex>
          <Box>
           <Image src={light ? "/ghibli_logo_black.webp" : "/ghibli_logo_white.webp" } 
           w= "140px" position= "center" top="20px" left="90px" mr="150px"  alt="Ghibli Studio Logo"/>
          </Box>
        </Flex>

        <Flex
          flex={{ base: '1', md: 'auto' }} ml={{ base: '-1' }}  display={{ base: 'flex', md: 'none' }}
          paddingRight={'40px'} alignItems={'center'} justifyContent={'center'} alignContent={'center'}>
          <MobileNav/>
        </Flex>
        <ChangeTheme/>
      </Flex>
    </Box>
  )
}

