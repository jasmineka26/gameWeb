import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
const NavigationBar = () => {
  return (
    <HStack className="py-2 px-4 justify-between">
      <ColorModeSwitch />
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavigationBar;
