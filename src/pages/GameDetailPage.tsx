import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../react-query/hooks/useGame";
import GameTrailer from "../components/GameTrailer";

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
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer game={game} />
    </>
  );
};

export default GameDetailPage;
