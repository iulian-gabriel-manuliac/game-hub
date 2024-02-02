import {
  Box,
  Grid,
  GridItem,
  Heading,
  Show,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../react-query/hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreens from "../components/GameScreens";
import GameGrid from "../components/GameGrid";

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
        <GameTrailer game={game} />
        <Box marginY={3}>
          <GameScreens gameId={game.id} />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
