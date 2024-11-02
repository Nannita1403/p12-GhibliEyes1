import Slider from "react-slick";
import { movies } from "../providers/data";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemePageProvider";

export default function Movies() {
  const {light, setLight} = useContext(ThemeContext);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const renderMovies = (startIndex) => (
    <>
      {movies.slice(startIndex, startIndex + 3).map((movie) => {
        const isReversed = movie.id % 2 === 0;
        return (
          <Flex key={movie.id} display={'flex'} flexDir={`flex(${isReversed ? "row-reverse" : "row"})`}
          width={'full'} paddingX={'60px'} alignItems={'center'} marginTop={'80px'} >
            {/* Box Movie detail */}
            <Box id="Movie detail" width={'33%'} bgGradient={`linear(to-l, ${movie.gradient})`}
            rounded={'12px'} boxShadow={'8px'} padding={'8px'} aspectRatio={1/1} display={'flex'} justifyItems={'center'} alignItems={'center'} color={'white'}>
              <Flex direction={'column'} padding={'16px'}>
                <Text fontFamily={`var(--font-family-title)`} fontWeight={'600'} fontSize={'3xl'} className="font-bold md:text-4xl">{movie.title}</Text>
                <Text fontSize={{lg:'md'}}>| {movie.year}</Text>
                <Text textStyle={'italic'} fontSize={{lg:'md'}} marginTop={'16px'}>Director: {movie.director}</Text>
                <Text textStyle={'italic'} fontSize={{lg:'md'}}>Producer: {movie.producer}</Text>
              </Flex>
            </Box>

            {/* Box Nombre Japones + Link */}
            <Box id="Japones name" width={'33%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <Box alignContent={'center'} justifyItems={'center'} fontSize={{lg:'30px'}} fontWeight={'700'}
              textStyle={{lg:'2xl'}} lineHeight={'1.25'}>
                {movie.japaneseTitle.split("").map((char, idx) => (
                  <Text key={idx}>
                    {char}
                    <br />
                  </Text>
                ))}
              </Box>
            </Box>
            
            {/*relative group*/}
            <Box id="Image-Gif" width={'33%'} position={'relative'}>
              <Image width={'full'} height={'full'}  rounded={'full'} objectFit={'cover'} objectPosition={'center'} transition={'transform'} transform={{hover:"scale-110"}}
                src={movie.image}
                alt={movie.title}
                loading="lazy"
              />
              <Image width={'full'} height={'full'} rounded={'full'} shadow={'sm'} objectFit={'cover'} objectPosition={'center'} position={'absolute'} top={'0'} left={'0'} transition={''} opacity={'0'} 
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
        {/* <Slider> */}
          <div>{renderMovies(0)}</div>
          <div>{renderMovies(3)}</div>
          <div>{renderMovies(6)}</div>
          <div>{renderMovies(9)}</div>
          <div>{renderMovies(12)}</div>
          <div>{renderMovies(15)}</div>
        {/* </Slider> */}
      </Box>
    </Box>
  );
}
