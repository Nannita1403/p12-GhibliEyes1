
import { ChevronDownIcon } from "@chakra-ui/icons";
import {Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Menu, MenuButton, MenuItem, MenuList, useDisclosure} from "@chakra-ui/react"
import { ThemeContext } from "../../providers/ThemePageProvider";
import { useContext } from "react";

const NAV_ITEMS = [
    { label: 'Home', href: '/'},
    { label: 'About', href: '/about'},
    { label: 'Movies', href: '/movies'},
    { label: 'Favorites', href: '/favorites'},
  ]

  export const MobileNav = () => {
    const {light, setLight} = useContext(ThemeContext);

    return (
      <>
      <Menu>
        <MenuButton as={Button} fontSize={'sm'} fontWeight={600} shadow='inner' 
        color={`var(--${light ? "light" : "dark"}-mode-text)`} bg={`var(--${light ? "light" : "dark"}-mode-text-negative)`}
         _hover={{ color:'grey.800' }} >
          Menu
        </MenuButton>
        
        <MenuList id="menuList" bg={'grey.400'} backdropBlur='8px' border={'none'} justifyContent={'flex-end'}> 
          <MenuItem justifyContent={'flex-end'} fontWeight={600} bg={'none'}as="a" href="/"  >Home</MenuItem>
          <MenuItem justifyContent={'flex-end'} fontWeight={600} bg={'none'}as="a" href="/about" >About</MenuItem>
          <MenuItem justifyContent={'flex-end'} fontWeight={600} bg={'none'}as="a" href="/movies">Movies</MenuItem>
          <MenuItem justifyContent={'flex-end'} fontWeight={600} bg={'none'}as="a" href="/favorites">Favorites</MenuItem>
        </MenuList>
      </Menu>
      </>
    );
  }