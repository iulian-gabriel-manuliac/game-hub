import useGenres from "./useGenres";

const usePlatform = (id?: number) => {
  const { data } = useGenres();

  return data?.results.find((g) => g.id === id);
};

export default usePlatform;
