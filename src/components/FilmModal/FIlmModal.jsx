import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, 
 ModalBody, ModalCloseButton, useDisclosure, Text, Button, 
 RadioGroup, Stack} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../providers/ThemePageProvider';



const BackdropJapanName= ({title, children, trailer})=> {
    
    const OverlayNameJapan = () => (    
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    const {light, setLight} = useContext(ThemeContext);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayNameJapan/>)
    const [scrollBehavior, setScrollBehavior] = useState('inside')

 
    return (
        <>
        <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
        </Stack>
      </RadioGroup>

        <Button mt={'10px'}
        fontSize={{base:'xs', md:'sm', lg:'md'}}
        paddingX={'5px'}
          onClick={() => {
            setOverlay(<OverlayNameJapan />)
            onOpen()
          }}
        >
        Ver más ...
        </Button>
        <Modal size={'xl'} isCentered isOpen={isOpen} onClose={onClose} scrollBehavior={scrollBehavior}>
          {overlay}
          <ModalContent > 
            <ModalHeader fontFamily={`var(--font-family-title)`} fontSize={'5xl'} fontWeight={'bold'}>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {children}
            </ModalBody>
            <ModalFooter>
            <Button
              as={'a'} href={trailer} px={6} marginRight={'10px'}
              color={`var(--${light ? "light" : "dark"}-mode-bg)`}
              bg={`var(--${light ? "light" : "dark"}-mode-text)`}
              _hover={{  bg: 'green.500' }}>
              Trailer
            </Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
        );}

        export default BackdropJapanName