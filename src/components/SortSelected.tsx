import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

const SortSelected = () => {
  const orderItems: string[] = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        order by: relevance
      </MenuButton>
      <MenuList>
        {orderItems.map((orderItem, i) => (
          <MenuItem key={i}>{orderItem}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelected;
