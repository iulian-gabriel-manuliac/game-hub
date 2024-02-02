import { Text, Spinner } from "@chakra-ui/react";
import useTrailers from "../react-query/hooks/useTrailers";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameTrailer = ({ game }: Props) => {
  const { data, isLoading, error } = useTrailers(game.id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data) {
    throw error; // throw so that ErrorPage can catch it
  }

  const firstTrailer = data?.results[0];

  if (!firstTrailer) {
    return <Text>No trailer available</Text>;
  }

  //  show only fisrt trailer
  return (
    firstTrailer && (
      <video
        controls
        src={firstTrailer.data["480"]}
        poster={firstTrailer.preview}
      ></video>
    )
  );

  //   return (
  //     <>
  //       {data?.results.map((trailer) => (
  //         <>
  //           <Heading marginY={3}>{trailer.name}</Heading>
  //           <video controls>
  //             <source src={trailer.data["480"]} type="video/mp4" />
  //           </video>
  //         </>
  //       ))}
  //     </>
  //   );
};

export default GameTrailer;
