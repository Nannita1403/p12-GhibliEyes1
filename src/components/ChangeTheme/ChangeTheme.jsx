import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemePageProvider";

const ChangeTheme = () => {

    //cambio visual del theme por provider/useContext
 const {light, setLight} = useContext(ThemeContext);

  return (
    <Image src={light ? "/iconLight.png" : "/op2.png"} 
      alt= "cambiar tema" w= "40px" 
      position= "absolute" top="10px" right="5px" transition="all 0.3s"
      cursor= "pointer" _hover={{ transform: "scale(1.3)" }}
      onClick={()=> setLight(!light)}/>
  );
};

export default ChangeTheme;