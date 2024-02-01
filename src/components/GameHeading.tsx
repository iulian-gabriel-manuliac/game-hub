import { Heading } from "@chakra-ui/react";
import useGenre from "../react-query/hooks/useGenre";
import usePlatform from "../react-query/hooks/usePlatform";
import useGameQueryStore from "../state-management/games/store";

const GameHeading = () => {
  // Games - initially
  // Action Games - if genre was selected
  // Xbox Games - if platform was selected
  // Xbox Action Games - if both platform and genre were selected

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  let headingParts = [platform?.name, genre?.name, "Games"];

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingParts.filter((headingPart) => headingPart).join(" ")}
    </Heading>
  );
};

export default GameHeading;
