import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreens from "../components/GameScreens";
import GameTrailer from "../components/GameTrailer";
import useGame from "../react-query/hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error; // throw so that ErrorPage can catch it
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem paddingX={5}>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <Heading marginY={3} size="lg">
          Trailer
        </Heading>
        <GameTrailer game={game} />
        <Heading marginY={3} size="lg">
          Screenshots
        </Heading>
        <GameScreens gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
