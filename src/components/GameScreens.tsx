import { Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useScreens from "../react-query/hooks/useScreens";

interface Props {
  gameId: number;
}

const GameScreens = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreens(gameId);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data) {
    throw error; // throw so that ErrorPage can catch it
  }

  console.log("data", data);

  if (!data?.results[0]) {
    return <Text>No screenshot available</Text>;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screen) => (
        <Image key={screen.id} objectFit="cover" src={screen.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreens;
