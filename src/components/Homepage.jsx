import { Box, Heading, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import SideStyling from './SideStyling';
import 'animate.css';

const Homepage = () => {
    const [isShown, setIsShown] = useState(false);    

    return (
        <Box 
            background="url('./images/oceanbackground.jpg') no-repeat center center fixed"
            backgroundSize="cover"
            height="100%"
            overflow="hidden"
            minHeight="800px"
            minWidth="1024px"
            margin="0"
            padding="0"
            position="relative"
        > 
            <VStack spacing="30px">
                <Heading 
                    position="absolute" 
                    top="15%"
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="5em"
                    color="#DFFAF9"
                    textAlign="center"
                    textShadow="1px 1px 2px black, 0 0 10px #0E1A51, 0 0 0.2em #30A6F1"
                    fontFamily="Rock Salt"
                    onMouseEnter={() => setIsShown(true)} >
                    KATRINA GUCILATAR
                </Heading>
                {isShown && (
                    <>
                    <Heading 
                    fontFamily="Rock Salt"
                    position="absolute" 
                    bottom="17%" 
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="4em"
                    color="#DFFAF9"
                    textAlign="center"
                    textShadow="1px 1px 2px black, 0 0 10px #0E1A51, 0 0 0.2em #30A6F1"
                    className="animate__animated animate__zoomInDown">
                    Full-Stack Web Developer</Heading>
                    </>
                )}
            </VStack>
            <SideStyling />
        </Box>
    )
}

export default Homepage;