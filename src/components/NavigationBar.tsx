import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavigationBar = () => {
  return (
    <HStack className="flex flex-row py-2 px-4 justify-between gap-3">
      <ColorModeSwitch />
      <SearchInput />
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavigationBar;
