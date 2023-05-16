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
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam,
                    }
                }),
            getNextPageParam: (lastPage, allPages) => {
                return lastPage.next ? allPages.length + 1 : undefined;
            }
        })
    )
}
    


export default useGames;
