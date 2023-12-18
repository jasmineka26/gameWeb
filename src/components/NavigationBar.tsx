import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavigationBar = ({ onSearch }: Props) => {
  return (
    <HStack className="py-2 px-4">
      <ColorModeSwitch />
      <SearchInput onSearch={onSearch} />
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

export default NavigationBar;
