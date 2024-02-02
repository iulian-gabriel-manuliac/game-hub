import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <NavLink to="/">
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </NavLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
