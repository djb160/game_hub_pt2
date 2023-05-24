import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/apiClient";
import { useInfiniteQuery } from '@tanstack/react-query';
import { Platform } from "./usePlatforms";


const apiClient = new APIClient<Platform>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
    return (
        useInfiniteQuery<FetchResponse<Platform>, Error>({
            queryKey: ["games", gameQuery],
            queryFn: ({ pageParam = 1 }) =>
                apiClient.getAll({
                    params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam,
                    }
                }),
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined;
            },
            staleTime: 24 * 60 * 60 * 1000, // 24 Hours
        })
    )
}
    


export default useGames;
