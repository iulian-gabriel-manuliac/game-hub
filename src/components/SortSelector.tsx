import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  sortOption: string | null;
}

//const SortSelector = ({ sortOption }: Props) => {
const SortSelector = () => {
  //  const { data, error } = usePlatforms();

  //   if (error) {
  //     return null;
  //   }

  //   {data.map((platform) => (
  //     <MenuItem
  //       key={platform.id}
  //       onClick={() => onSelectPlatform(platform)}
  //     >
  //       {platform.name}
  //     </MenuItem>
  //   ))}

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by: Relevance"}
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
