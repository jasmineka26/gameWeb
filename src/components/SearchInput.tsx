import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<FaSearch />} />
      <Input
        backgroundColor={"gray-500"}
        height={"40px"}
        borderRadius={20}
        placeholder="Search games ..."
        variant={"filled"}
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
