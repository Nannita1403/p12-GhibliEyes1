import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { movies } from "../providers/data";
import { AspectRatio, Avatar, Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemePageProvider";
import { keyframes } from "@emotion/react";
import BackdropJapanName from "../components/FilmModal/FIlmModal";

export default function Movies() {
  const {light, setLight} = useContext(ThemeContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true
  };

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

  const renderMovies = (startIndex) => (
    <>
      {movies.slice(startIndex, startIndex + 2).map((movie, i) => {
        const isReversed = i % 2 === 0;
        return (
          <Flex id="Movie Box" key={movie.id} display={'flex'} maxH={'250px'}
          direction={`${isReversed ? "row-reverse" : "row"}`} maxW={'1000px'} paddingX={{base:'10px', md:'50px', lg:'120px'}} 
          alignContent={'space-between'} justifyContent={'space-evenly'}  alignItems={'center'} >
            {/* Box Movie detail */}
            <Box id="Movie detail" w={{base:'40%', lg:'33%'}} bgGradient={`linear(to-l, ${movie.gradient})`} rounded={'12px'} shadow={'xl'} aspectRatio={1} display={'flex'} 
            justifyItems={'stretch'} alignItems={'center'} color={'white'} maxW={{base:'120px', md:'250px'}} justifyContent={'space-around'}>
              <Flex direction={'column'} padding={'9px'}>
                <Text fontFamily={`var(--font-family-title)`} fontWeight={'bold'} fontSize={{base:'md', md:'xl', lg:'2xl'}}>{movie.title}</Text>
                <Text fontSize={{base:'xs', md:'sm', lg:'md'}}>| {movie.year}</Text>
                <Text fontSize={{base:'xs', md:'sm', lg:'md'}} marginTop={'8px'}>Director: {movie.director}</Text>
                <Text fontSize={{base:'xs', md:'sm', lg:'md'}}>Producer: {movie.producer}</Text>
                    <BackdropJapanName title={movie.title} trailer={movie.trailer} >
                    
                    <Text fontSize={{base:'xs', md:'sm', lg:'md'}} fontWeight={'bold'}>| Año: {movie.year} | {movie.running_time} min | Score: {movie.score}</Text>
                    <Text fontSize={{base:'xs', md:'sm', lg:'md'}} marginTop={'8px'}>Director: {movie.director} </Text>
                    <Text fontSize={{base:'xs', md:'sm', lg:'md'}}>Producer: {movie.producer}</Text>
                      <br/>
                    <Text fontSize={{base:'xs', md:'sm', lg:'md'}}>Descripcion: {movie.description}</Text>
                      <br/>
                      <AspectRatio maxW='400px' ratio={4 / 3}>
                        <Image justifyItems={'center'}src={movie.movie_banner} alt='banner' objectFit='cover' />
                      </AspectRatio>
                    </BackdropJapanName>
              </Flex>
            </Box>

            {/* Box Nombre Japones + Link */}
            <Box id="Japones name" width={{base:'20%', lg:'33%'}} display={'flex'} alignItems={'center'} justifyContent={'center'}>

              <Box display={'flex'} flexDir={'column'} alignContent={'center'} justifyItems={'center'}
               fontSize={{base:'md', md:'xl', lg:'2xl'}} fontWeight={'bold'} lineHeight={'1.1'}
              >
                {movie.japaneseTitle.split("").map((char, idx) => (
                  <Text key={idx}>
                    {char}
                    <br />
                  </Text>
                ))}
              </Box>
            </Box>
            
            {/* Box Image-Gif */}
            <Flex
              justifyContent="center"  alignItems="center" h="300px"   w={{base:'40%', lg:'33%'}}  overflow="hidden">
              <Box
                as="div"  position="relative" w={'180px'} h={'180px'} 
                _before={{
                  content: "''", position: 'relative', display: 'block', width: '300%',  height: '300%',
                  boxSizing: 'border-box', marginLeft: '-100%',  marginTop: '-100%', borderRadius: '50%', bgColor:`var(--${light ? "light" : "dark"}-mode-text-about)`,
                  animation:`2.25s ${pulseRing} cubic-bezier(0.355, 0.02, 0.415, 0.855) -0.3s infinite`,
                }}>
                <Avatar src={movie.gif} size="full" position="absolute" top={0} />
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </>
  );


  return (
    <Box id="movies" color={`var(--${light ? "light" : "dark"}-mode-text-about)`} 
    paddingY={{base:'70px'}} h={'100svh'}>
      <Box marginX={'auto'} paddingY={'20px'} paddingX={{md:'24px', xl:'300px'}}>
        {/* Section Title */}
        <Flex id="sectionTitle" alignContent={'center'} flexDirection={'column'} 
        alignItems={'center'} marginBottom={'24px'} >
        <Text textStyle={'sm'} > MASTERPIECES </Text>
        <Text fontFamily={`var(--font-family-title)`} fontSize={{base:'3xl', md:'5xl'}} fontWeight={'700'}
        borderBottomWidth={'8px'} borderColor={`var(--color-teal-400)`}> Movies </Text>
        </Flex>

        {/* Carousel */}
        <Slider {...settings}>
          <div>{renderMovies(0)}</div>
          <div>{renderMovies(3)}</div>
          <div>{renderMovies(6)}</div>
          <div>{renderMovies(9)}</div>
          <div>{renderMovies(12)}</div>
          <div>{renderMovies(15)}</div>
        </Slider>
      </Box>
    </Box>
  );
}
