import { Box, Flex, Image, Text } from '@chakra-ui/react';
import ErrorImg from "/404.webp"
const Error = () => {
  return (
    <Flex
    h={'100svh'} w={'100%'}  overflowX={'hidden'} display={'flex'} 
    alignItems={'center'} justifyContent={'center'}
    // justify='center' align='center' w='100%' h='100vw' gap='20px'
    // bgGradient='linear(to-b, teal.400, teal.900)' pos='relative'
     >
      <Flex direction='column' align='center' justify='space-between'
      h='100sw' w='100sw'>
        <Box w='auto' >
          <Image src={ErrorImg} alt='Error Fetching ⚠️'
          pos='relative' w='100%'/>
        </Box>
        <Flex  paddingTop='260px' flexDir='column' justify='center'
        alignItems='center' pos='absolute'>
          <Text as='b'fontSize='7vw' letterSpacing='1px'> Oops!</Text>
          <Text as='b'fontSize='5vw'letterSpacing='1px'> 404 error</Text>
          <Text fontSize='2vw' letterSpacing='1px' lineHeight='2.5vw'> Refresh the page or try again later</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Error;