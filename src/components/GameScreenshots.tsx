import React from 'react'
import useGameScreenshots from './../hooks/useGameScreenshots';
import { SimpleGrid, Image } from '@chakra-ui/react';


interface GameScreenshotsProps {
    gameId: number;
}

const GameScreenshots = ({ gameId }:GameScreenshotsProps) => {
    const { data, error, isLoading } = useGameScreenshots(gameId);

    if(isLoading) {
        return null;
    }
    if(error) {
        throw error;
    }
    else {
        return (
            <SimpleGrid columns={{ base:1, md:2 }} spacing={2}>
                {data?.results.map((file) => 
                    <Image key={file.id} src={file.image} />
                )}
            </SimpleGrid>
        );
    }
}

export default GameScreenshots