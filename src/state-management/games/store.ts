import { create } from "zustand";
//import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (searchText: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

// create<CounterStore> - creates a custom hook
// set => {} - defines a block of code; set => ({}) - returns an object

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: { searchText },
    })),
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder },
    })),
}));

// if (process.env.NODE_ENV === "development") {
//   mountStoreDevtool("Counter Store", useCounterStore);
// }

export default useGameQueryStore;
