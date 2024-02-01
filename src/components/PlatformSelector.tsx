import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../react-query/hooks/usePlatform";
import usePlatforms from "../react-query/hooks/usePlatforms";
import useGameQueryStore from "../state-management/games/store";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const paltformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(paltformId);

  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  if (error) {
    return null;
  }

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
