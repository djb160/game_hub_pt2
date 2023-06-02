
import { useQuery } from '@tanstack/react-query';
import { GameScreenshot } from '../entities/GameScreenshot';
import APIClient from '../services/apiClient';



const useGameScreenshots = (gameId:number) => {    
    const apiClient = new APIClient<GameScreenshot>(`/games/${gameId}/screenshots`);
    
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll
    })
}

export default useGameScreenshots;