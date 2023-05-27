import { create } from "zustand";


interface GameQuery { 
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
    slug?: string;
    description?: string;
    description_raw?: string;
}

interface GamesQueryStore {
    gameQuery: GameQuery;
    setSearchText: ( searchText:string ) => void;
    setGenreId: ( genreId:number ) => void;
    setPlatformId: ( platformId:number ) => void;
    setSortOrder: ( sortOrder:string ) => void;
}

const useGameQueryStore = create<GamesQueryStore>(set => ({
    gameQuery: {},
    setSearchText: ( searchText ) => set(() => ({ gameQuery: {searchText } })),
    setGenreId: ( genreId ) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: ( platformId ) => set((store) => ({ gameQuery: {...store.gameQuery, platformId } })),
    setSortOrder: ( sortOrder ) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}))

export default useGameQueryStore;