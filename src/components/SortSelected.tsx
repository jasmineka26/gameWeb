import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelected = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "_added", lable: "Date added" },
    { value: "name", lable: "Name" },
    { value: "_release", lable: "Release date" },
    { value: "metacritic", lable: "Popularity" },
    { value: "_rating", lable: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        order by : {currentSortOrder?.lable || " Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((orderItem) => (
          <MenuItem
            key={orderItem.value}
            onClick={() => onSelectSortOrder(orderItem.value)}
          >
            {orderItem.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelected;
