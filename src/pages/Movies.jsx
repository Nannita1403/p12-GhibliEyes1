import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { movies } from "../providers/data";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemePageProvider";

export default function Movies() {
  const {light, setLight} = useContext(ThemeContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };


  const renderMovies = (startIndex) => (
    <>
      {movies.slice(startIndex, startIndex + 3).map((movie, i) => {
        const isReversed = i % 2 === 0;
        return (
          <Flex id="Movie Box" key={movie.id} display={'flex'} 
          direction={`${isReversed ? "row-reverse" : "row"}`} width={'full'} paddingX={{base:'10px', md:'50px', lg:'90px'}} justifyContent={'center'}  alignItems={'center'} marginTop={'15px'} >
            {/* Box Movie detail */}
            <Box id="Movie detail" width={'33%'} bgGradient={`linear(to-l, ${movie.gradient})`} margin={'15px'} rounded={'12px'} shadow={'xl'} padding={'8px'} aspectRatio={1} display={'flex'} justifyItems={'center'} alignItems={'center'} color={'white'}>
              <Flex direction={'column'} padding={'16px'}>
                <Text fontFamily={`var(--font-family-title)`} fontWeight={'bold'} fontSize={{base:'md', md:'xl', lg:'2xl'}} className="font-bold md:text-4xl">{movie.title}</Text>
                <Text fontSize={{base:'xs', md:'sm', lg:'md'}}>| {movie.year}</Text>
                <Text fontSize={{base:'xs', md:'sm', lg:'md'}} marginTop={'8px'}>Director: {movie.director}</Text>
                <Text fontSize={{base:'xs', md:'sm', lg:'md'}}>Producer: {movie.producer}</Text>
              </Flex>
            </Box>

            {/* Box Nombre Japones + Link */}
            <Box id="Japones name" width={{base:'20%', lg:'33%'}} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Box alignContent={'center'} justifyItems={'center'} fontSize={{base:'md', md:'xl', lg:'2xl'}} fontWeight={'bold'} lineHeight={'1.1'}>
                {movie.japaneseTitle.split("").map((char, idx) => (
                  <Text key={idx}>
                    {char}
                    <br />
                  </Text>
                ))}
              </Box>
            </Box>
            
            {/*relative group*/}

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} id="Image-Gif" width={'33%'} position={'relative'} marginX={'15px'}>
           
              {/* <Image width={'100%'} height={'100%'} borderRadius={'full'} boxSize='250px' objectFit={'cover'} shadow={'sm'} src={movie.image} _hover={{src:`${movie.gif}`}} transition={'transform'}  loading="lazy"
             ></Image> */}
              {/* <Image width={'full'} height={'full'}  rounded={'full'} objectFit={'cover'} objectPosition={'center'} transition={'transform'} transform={{hover:"scale-110"}}
                src={movie.image}
                alt={movie.title}
                loading="lazy"
              /> */}
              <Image width={'75%'} height={'full'} rounded={'full'} shadow={'sm'} fit={'cover'} objectPosition={'center'} position={'relative'} top={'0'} left={'0'} 
                className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                src={movie.gif}
                alt={`${movie.title} Hover`}
                loading="lazy"
              />
            </Box>
          </Flex>
        );
      })}
    </>
  );

  // {xl:'40px', lg:'24px'} justify={{ base: 'center', md: 'space-around' }}>
  return (
    <Box id="movies" color={`var(--${light ? "light" : "dark"}-mode-text-about)`} 
    paddingY={{base:'70px'}}>
      <Box marginX={'auto'} paddingY={'40px'} paddingX={{md:'24px'}}>
        {/* Section Title */}
        <Flex id="sectionTitle" alignContent={'center'} flexDirection={'column'} 
        alignItems={'center'} marginBottom={'24px'} >
        <Text textStyle={'sm'} > MASTERPIECES </Text>
        <Text marginTop={'5px'} fontFamily={`var(--font-family-title)`} fontSize={{base:'3xl', md:'5xl'}} fontWeight={'700'}
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
