import APIClient, { FetchResponse } from "../services/apiClient";
import { useInfiniteQuery } from '@tanstack/react-query';
import Platform from "../entities/Platform";
import ms from 'ms';
import useGameQueryStore from './../components/store';



const apiClient = new APIClient<Platform>("/games");

const useGames = () => {
    const gameQuery = useGameQueryStore(selector => selector.gameQuery);

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
            staleTime: ms('24h'),
        })
    )
}
    


export default useGames;
