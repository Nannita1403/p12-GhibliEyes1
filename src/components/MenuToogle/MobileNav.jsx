
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { ThemeContext } from "../../providers/ThemePageProvider";
import { useContext } from "react";

const NAV_ITEMS = [
    { label: 'Home', href: '/'},
    { label: 'About', href: '/about'},
    { label: 'Movies', href: '/movies'},
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
        
        <MenuList id="menuList" bgColor={'white'} opacity={'0.4'} justifyContent={'flex-end'} color={`var(--color-dark-font)`}> 
          <MenuItem justifyContent={'flex-end'} fontWeight={600} as="a" href="/"  >Home</MenuItem>
          <MenuItem justifyContent={'flex-end'} fontWeight={600} as="a" href="/about" >About</MenuItem>
          <MenuItem justifyContent={'flex-end'} fontWeight={600} as="a" href="/movies">Movies</MenuItem>
        </MenuList>
      </Menu>
      </>
    );
  }