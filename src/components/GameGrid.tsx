import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../react-query/hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  // const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount} //This is important field to render the next data
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeletonIdx) => (
            <GameCardContainer key={skeletonIdx}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading && data?.pages[0].results?.length === 0 && (
          <Text>No game found</Text>
        )}
        {!isLoading &&
          data?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
