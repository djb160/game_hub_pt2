// import { useQuery } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";


export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: () => apiClient
            .get<FetchResponse<Genre>>("/genres")
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: { count:genres.length, results:genres},
    })
};


export default useGenres;