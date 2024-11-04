import { Box, Flex } from "@chakra-ui/react";


const Hero = () => {
  return (
    <>
      <Flex display={'flex'} width={'100%'} height={'100%'} zIndex={'1'} >       
        <Box >
        <video  src={'https://cdn.artstation.com/p/video_sources/000/146/133/2k.mp4'} autoPlay loop muted playsInline/>
        </Box>
        <Box>

        </Box>
      </Flex>
    </>
  );
};

export default Hero;