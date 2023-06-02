import { useParams } from 'react-router-dom';
import { Heading, Spinner } from '@chakra-ui/react';
import useGame from './../hooks/useGame';
import ExpandableText from './ExpandableText';
// import parse from "html-react-parser";
import GameAttributes from './GameAttributes';
import GameTrailer from './GameTrailer';



const GameDetailsPage = () => {
    const { slug } = useParams();
    const { data:game, isLoading, error } = useGame(slug!);

    if(isLoading) {
        return <Spinner />;
    } else {
        // const description = game ? parse(game.description) : 'what';

        return (
            <>
                <Heading>{game?.name}</Heading>
                <ExpandableText>{game?.description}</ExpandableText>
                <GameAttributes game={game} />
                <GameTrailer gameId={game?.id} />
                
            </>            
        )
    }
    
}

export default GameDetailsPage;