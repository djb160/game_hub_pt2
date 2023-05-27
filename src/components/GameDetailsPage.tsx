import { useParams } from 'react-router-dom';
import { Heading, Spinner, Text } from '@chakra-ui/react';
import useGame from './../hooks/useGame';
import parse from "html-react-parser";



const GameDetailsPage = () => {
    const { slug } = useParams();
    const { data:game, isLoading, error } = useGame(slug!);

    if(isLoading) {
        <Spinner />
    } 
    // if(!game) {
    //     throw error;
    // } 
    else {
        const description = game ? parse(game.description) : 'what';

        return (
            <>
                <Heading>{game?.name}</Heading>
                <Text>{description}</Text>
            </>
            
        )
    }
    
}

export default GameDetailsPage;