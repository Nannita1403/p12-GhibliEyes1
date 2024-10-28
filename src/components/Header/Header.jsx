
import {React, useState} from "react";
import MenuToogle from "../MenuToogle/MenuTogle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
    <MenuToogle/>

    </>
  );
};

export default Header;