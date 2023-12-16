import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { FaAngleDown } from "react-icons/fa";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatformName?: string;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformName = "All",
}: Props) => {
  const { platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        {selectedPlatformName}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectedPlatform(platform);
            }}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
