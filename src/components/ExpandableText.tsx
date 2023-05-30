import React, { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';



interface ExpandableText {
    children: string;
}


const ExpandableText = ({ children }:ExpandableText) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) {
        return null;
    } 
    if (children.length <= limit) {
        return (<Text>{ children }</Text>);
    }   
    else {
        const text =  expanded ? children : children.substring(0, limit) + '...';

        return (
            <>
                <Text>{ text }</Text>
                <Button
                    size={'xs'}
                    fontWeight={'bold'}
                    colorScheme='blue'
                    marginLeft={1}
                    onClick={() => setExpanded(!expanded)}
                >
                    { expanded ? 'See Less' : 'See More' }
                </Button>       
            </>                 
        )
    }
    
}

export default ExpandableText