import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemePageProvider";
import AboutHayao from "../assets/about/AboutHayao.jpg";

const About = () => {
  const {light, setLight} = useContext(ThemeContext);
  return (
    <>
    <Flex  id="about" bg={`var(--${light ? "light" : "dark"}-mode-bg)`}
    paddingTop={'30px'}>
      <Box max-width={'1280px'} paddingX={'20px'} paddingy={'0px'}>
        <Flex paddingTop={'70px'} display='flex' wrap='nowrap'>
        {/* Columna Izquiera */}
         <Box id="ColIzq">
            {/* Titulo*/}
      <Box id="titles" color={`var(--${light ? "light" : "dark"}-mode-text-about)`}
      paddingX={'4'} paddingY={'4'} marginBottom={'6'} borderLeftWidth={'4px'} borderColor={`var(--color-teal-400)`} >
      <Text textStyle="md">
        ABOUT OUR STORY
      </Text>
      <Text marginTop={'8px'}fontFamily={`var(--font-family-tittle)`} fontSize={'40px'} fontWeight={'600'}>
        Discovering Ghibli Magic
      </Text>
      </Box>
         {/* Contenido de Texto */}
        <Box id="texts" color={`var(--${light ? "light" : "dark"}-mode-text-about)`}>
         <Text paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
            Hey there ૮ ˶ᵔ ᵕ ᵔ˶ ა! Let&apos;s dive into the magical world of
            Studio Ghibli 🌱, co-founded in &apos;85 by the dynamic duo of
            animated wonders, <strong>Isao Takahata</strong> and{" "}
            <strong>Hayao Miyazaki</strong>.
          </Text>
          <Text paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
            This powerhouse has crafted twenty-two awe-inspiring films.
            Think box office gold—most of their creations soared to the top
            in Japan. <strong>SPIRITED AWAY</strong>, directed by Miyazaki
            in 2001, holds the record as Japan&apos;s highest-grossing film,
            earning over 30 billion yen! 💸
          </Text>
          <Text  paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
            But it&apos;s not just about the numbers. Ghibli films are a
            magnet for awards and acclaim. <strong>SPIRITED AWAY</strong>{" "}
            clinched the Golden Bear at the 2002 Berlin International Film
            Festival and bagged the 2002 Academy Award for{" "}
            <strong>Best Animated Feature Film</strong>. Adding a touch of
            magic to reality, they teamed up to create the{" "}
            <strong>Ghibli Museum</strong> in 2001, a whimsical creation in
            Mitaka designed by the legendary Miyazaki.
          </Text>
          <Text  paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
            Zooming into the present, Studio Ghibli continues to dominate.
            Their last four films—<strong>THE WIND RISES (2013)</strong>,{" "}
            <strong>THE TALE OF THE PRINCESS KAGUYA (2013)</strong>,{" "}
            <strong>THE RED TURTLE (2016)</strong>—nailed four consecutive
            Academy Award nominations.
          </Text>
          <Text  paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
            <strong>The Studio Ghibli Collection</strong> is a treasure
            trove of timeless masterpieces. Each film is a unique and
            unforgettable journey, capturing the heart and soul of humanity.
            And the magic doesn&apos;t stop—there&apos;s a new Ghibli
            masterpiece in the works! Stay tuned for more enchanting tales!
            ✨
          </Text>
        </Box>     
         </Box>
        {/* Columna Derecha Imagen */}
        <Box id="ColDer" width={{ base:'full', md:'1/2'}} paddingX={'16px'} marginBottom={{base:'40px', md:'0'}}  overflow={'hidden'}>
            <Image
              src={AboutHayao} alt="Image Hayao Gibli Studio"
              objectFit={'cover'} width={'full'} height={'full'} borderRadius={'12px'}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
    </>
  );
};

export default About;