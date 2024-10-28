import { Box, Flex } from "@chakra-ui/react";


const Hero = () => {
  return (
    <>
      <Flex zIndex={'-1'}>
        <video src={'https://cdn.artstation.com/p/video_sources/000/146/133/2k.mp4'} autoPlay loop muted playsInline object-fit="cover"/>
        <Box>

        </Box>
      </Flex>
    </>
  );
};

export default Hero;