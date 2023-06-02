import { useParams } from 'react-router-dom';
import { GridItem, Heading, Spinner } from '@chakra-ui/react';
import useGame from './../hooks/useGame';
import ExpandableText from './ExpandableText';
// import parse from "html-react-parser";
import GameAttributes from './GameAttributes';
import GameTrailer from './GameTrailer';
import GameScreenshots from './GameScreenshots';
import { SimpleGrid } from '@chakra-ui/react';



const GameDetailsPage = () => {
    const { slug } = useParams();
    const { data:game, isLoading, error } = useGame(slug!);

    if(isLoading) {
        return <Spinner />;
    } else {
        // const description = game ? parse(game.description) : 'what';

        return (
            <SimpleGrid columns={{ base:1, md:2 }} spacing={5}>
                <GridItem>
                    <Heading>{game?.name}</Heading>
                    <ExpandableText>{game?.description}</ExpandableText>
                    <GameAttributes game={game} />
                </GridItem>
                
                <GridItem>
                    <GameTrailer gameId={game?.id} />
                    <GameScreenshots gameId={game.id} />
                </GridItem>

            </SimpleGrid>              
  
        )
    }
    
}

export default GameDetailsPage;