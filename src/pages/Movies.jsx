import Slider from "react-slick";
import { movies } from "../providers/data";
import { Box, Flex, Text } from "@chakra-ui/react";
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
          <Flex key={movie.id} display={`flex ${isReversed ? "flex-row-reverse" : "flex-row"}`}
          width={'full'} paddingX={'16px'} alignItems={'center'} marginTop={'80px'} >
            <Box id="Movie detail" width={'1/3'} bgGradient={`linear(to-l, ${movie.gradient})`}
            rounded={'12px'} shadow={'8px'} padding={'8px'} aspectRatio={1/1} flex={'flex'} justifyItems={'center'} alignItems={'center'} color={'white'}
            >
              <Flex direction={'column'} padding={'16px'}>
                <Text fon font className="font-bold md:text-4xl">{movie.title}</Text>
                <span className="lg:text-md">| {movie.year}</span>
                <p className="lg:text-md italic mt-4">Director: {movie.director}</p>
                <p className="lg:text-md italic mt-4">Producer: {movie.producer}</p>
              </Flex>
            </Box>

            <div className="w-1/3 flex items-center justify-center">
              <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                {movie.japaneseTitle.split("").map((char, idx) => (
                  <span key={idx}>
                    {char}
                    <br />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/3 relative group">
              <img
                className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                src={movie.image}
                alt={movie.title}
                loading="lazy"
              />
              <img
                className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                src={movie.gif}
                alt={`${movie.title} Hover`}
                loading="lazy"
              />
            </div>
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
