import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, 
 ModalBody, ModalCloseButton, useDisclosure, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { movies } from '../../providers/data'


const BackdropJapanName= ({title, children})=> {
    
    const OverlayNameJapan = () => (    
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayNameJapan/>)

 
    return (
        <>
        <Button mt={'10px'}
        fontSize={{base:'xs', md:'sm', lg:'md'}}
        paddingX={'5px'}
          onClick={() => {
            setOverlay(<OverlayNameJapan />)
            onOpen()
          }}
        >
        Veamos Más ...
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {children}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </>
        );}

        export default BackdropJapanName