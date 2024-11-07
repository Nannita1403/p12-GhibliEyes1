
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
        <MenuButton as={Button}
            fontSize={'sm'}
            fontWeight={600}
            shadow='inner'
            color={`var(--${light ? "light" : "dark"}-mode-text)`}
            bg={`var(--${light ? "light" : "dark"}-mode-text-negative)`} _hover={{
              color:'grey.800'
            }} >
          Menu
        </MenuButton>
        <MenuList bg={'none'}border={'none'}>
          <MenuItem fontWeight={600} bg={'none'}as="a" href="/" textShadow="1px 1px black" >Home</MenuItem>
          <MenuItem fontWeight={600} bg={'none'}as="a" href="/about" textShadow="1px 1px black">About</MenuItem>
          <MenuItem fontWeight={600} bg={'none'}as="a" href="/movies"textShadow="1px 1px black">Movies</MenuItem>
          <MenuItem fontWeight={600} bg={'none'}as="a" href="/favorites"textShadow="1px 1px black">Favorites</MenuItem>
        </MenuList>
      </Menu>
      </>
    );
  }
    
  //     <Stack bg={'none'} p={4} display={{ md: 'none' }}>
  //       {NAV_ITEMS.map((navItem) => (
  //         <MobileNavItem key={navItem.label} {...navItem} />
  //       ))}
  //     </Stack>
  //   )
  // }

  // const MobileNavItem = ({ label, children, href }) => {
  //   const { isOpen, onToggle } = useDisclosure()
  
  //   return (
  //     <Stack spacing={4} onClick={children && onToggle}>
  //       <Box
  //         py={2}
  //         as="a"
  //         href={href ?? '#'}
  //         justifyContent="space-between"
  //         alignItems="center"
  //         _hover={{
  //           textDecoration: 'none',
  //         }}>
  //         <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
  //           {label}
  //         </Text>
  //         {children && (
  //           <Icon
  //             as={ChevronDownIcon}
  //             transition={'all .25s ease-in-out'}
  //             transform={isOpen ? 'rotate(180deg)' : ''}
  //             w={6}
  //             h={6}
  //           />
  //         )}
  //       </Box>
  
  //       <Collapse in={isOpen} animateOpacity >
  //         <Stack
  //           mt={2}
  //           pl={4}
  //           borderLeft={1}
  //           borderStyle={'solid'}
  //           borderColor={useColorModeValue('gray.200', 'gray.700')}
  //           align={'start'}>
  //           {children &&
  //             children.map((child) => (
  //               <Box as="a" key={child.label} py={2} href={child.href}>
  //                 {child.label}
  //               </Box>
  //             ))}
  //         </Stack>
  //       </Collapse>
  //     </Stack>
