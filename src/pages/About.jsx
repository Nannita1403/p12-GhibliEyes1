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
      <Flex max-width={'1280px'} paddingX={'20px'} paddingy={'0px'} paddingTop={'70px'} wrap={{base:'wrap', md:'nowrap'}}>
        {/* Columna Izquiera */}
         <Box id="ColIzq" width={{ base:'full', md:'1/2'}}>
            {/* Titulo*/}
      <Box id="titles" color={`var(--${light ? "light" : "dark"}-mode-text-about)`}
      paddingX={'24px'} paddingY={'16px'} marginBottom={'24px'} borderLeftWidth={'8px'} borderColor={`var(--color-teal-400)`} >
      <Text textStyle="md">
        SOBRE NUESTRA HISTORIA
      </Text>
      <Text marginTop={'8px'}fontFamily={`var(--font-family-title)`} fontSize={'40px'} fontWeight={'600'}>
        La magia de Ghibli 
      </Text>
      </Box>
         {/* Contenido de Texto */}
        <Box id="texts" color={`var(--${light ? "light" : "dark"}-mode-text-about)`}>
         <Text paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
         ¡Ey, ahí estás! ૮ ˶ᵔ ᵕ ᵔ˶ ა! Sumerjámonos en el mágico mundo de
         Studio Ghibli 🌱, co-fundado en 1985 por el dinámico dúo de
         maravillas animadas, <strong>Isao Takahata</strong> con{" "}
            <strong>Hayao Miyazaki</strong>.
          </Text>
          <Text paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
          Esta poderosa productora ha creado veintidós películas impresionantes.
          Piense en oro de taquilla: la mayoría de sus creaciones llegaron a la cima
          en Japón. <strong>SPIRITED AWAY</strong>, dirigida por Miyazaki
          en 2001, tiene el récord como la película más taquillera de Japón, 
          ¡recaudando más de 30 mil millones de yenes! 💸
          </Text>
          <Text  paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
          Pero no se trata sólo de números. Las películas de Ghibli son un
          imán para premios y elogios. <strong>SPIRITED AWAY</strong>{" "}
          ganó el Oso de Oro en el Festival Internacional de Cine de 
          Berlín de 2002 y se llevó el Premio de la Academia de 2002 a la{" "}
            <strong>Mejor Película de Animación</strong>. Para agregar un toque 
            de magia a la realidad, se unieron para crear el{" "}
            <strong>Museo Ghibli</strong> en 2001, una creación extravagante en
            Mitaka diseñada por el legendario Miyazaki.
          </Text>
          <Text  paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
          Si nos adentramos en el presente, el Studio Ghibli sigue dominando.
          Sus últimas cuatro películas:—<strong>THE WIND RISES (2013)</strong>,{" "}
            <strong>THE TALE OF THE PRINCESS KAGUYA (2013)</strong>,{" "}
            <strong>THE RED TURTLE (2016)</strong>—, obtuvieron cuatro 
            nominaciones consecutivas al Oscar.
          </Text>
          <Text  paddingX={'16px'} marginBottom={'20px'} fontSize={'1rem'} lineHeight={'28px'}>
            <strong>La Colección Studio Ghibli</strong> es un tesoro
          de obras maestras atemporales. Cada película es un viaje único e
          inolvidable que captura el corazón y el alma de la humanidad.
          Y la magia no se detiene: ¡hay una nueva obra maestra
          de Ghibli en proceso! ¡No te pierdas más historias encantadoras!
            ✨
          </Text>
        </Box>     
         </Box>
        {/* Columna Derecha Imagen */}
        <Box id="ColDer" width={{ base:'full', md:'1/2'}} paddingX={'16px'} marginBottom={'5'}  overflow={'hidden'}>
            <Image
              src={AboutHayao} alt="Image Hayao Gibli Studio"
              objectFit={'cover'} width={{base:'full'}} height={'full'} borderRadius={'12px'}
            />
          </Box>
      </Flex>
    </Flex>
    </>
  );
};

export default About;