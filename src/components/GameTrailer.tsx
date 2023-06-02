import useGameTrailers from './../hooks/useGameTrailers';


interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({ gameId }:GameTrailerProps) => {
    const {data, error, isLoading} = useGameTrailers(gameId);
    
    if (isLoading) {
        return null;
    }
    if (error) {
        throw error;
    }
    else {
        const firstTrailer = data?.results[0];
        return firstTrailer ? (
            <video 
                src={firstTrailer.data[480]}
                poster={firstTrailer.preview}
                controls
            />
        ) : null;
    }    
}

export default GameTrailer