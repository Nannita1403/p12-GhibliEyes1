import { Box, Flex } from "@chakra-ui/react";


const Hero = () => {
  return (
    <>
      <Flex height={'100vh'} zIndex={'-1'} >       
        <Box objectFit={'cover'}  width={'100%'}>
        <video  src={'https://cdn.artstation.com/p/video_sources/000/146/133/2k.mp4'} autoPlay loop muted playsInline/>
        </Box>
        <Box>

        </Box>
      </Flex>
    </>
  );
};

export default Hero;