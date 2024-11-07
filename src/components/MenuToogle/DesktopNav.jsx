import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemePageProvider";
import { Box, Popover, PopoverTrigger, Stack } from "@chakra-ui/react";

const NAV_ITEMS = [
    { label: 'Home', href: '/'},
    { label: 'About', href: '/about'},
    { label: 'Movies', href: '/movies'},
    { label: 'Favorites', href: '/favorites'}
]

export const DesktopNav = () => {
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
                    textDecoration: 'bold',
                    color:'grey.800',
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