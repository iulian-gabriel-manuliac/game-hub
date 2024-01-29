import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games - initially
  // Action Games - if genre was selected
  // Xbox Games - if platform was selected
  // Xbox Action Games - if both platform and genre were selected

  let headingParts = [gameQuery.platform?.name, gameQuery.genre?.name, "Games"];

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {headingParts.filter((headingPart) => headingPart).join(" ")}
    </Heading>
  );
};

export default GameHeading;
