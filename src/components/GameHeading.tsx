import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../react-query/hooks/useGenres";
import usePlatforms from "../react-query/hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games - initially
  // Action Games - if genre was selected
  // Xbox Games - if platform was selected
  // Xbox Action Games - if both platform and genre were selected

  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  let headingParts = [platform?.name, genre?.name, "Games"];

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingParts.filter((headingPart) => headingPart).join(" ")}
    </Heading>
  );
};

export default GameHeading;
