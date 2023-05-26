import { Heading } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre';
import useGameQueryStore from './store';
import usePlatform from './../hooks/usePlatform';


const GameHeading = () => {
    const genreId = useGameQueryStore().gameQuery.genreId;
    const genre = useGenre(genreId);

    const platformId = useGameQueryStore().gameQuery.platformId;
    const platform = usePlatform(platformId);
    
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
    )
}

export default GameHeading