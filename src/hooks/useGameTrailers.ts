import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { GameTrailer } from '../entities/GameTrailer';
import APIClient from '../services/apiClient';



const useGameTrailers = (gameId: number) => {
    const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);

    return (
        useQuery({
            queryKey: ['trailers', gameId],
            queryFn: apiClient.getAll
        })
    )
}

export default useGameTrailers;