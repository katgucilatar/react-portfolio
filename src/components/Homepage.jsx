import { Box, Heading, Image, VStack, Flex, Spacer, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/rock-salt';
const theme = extendTheme({
    textStyles: {
        h1: {
            fontFamily: 'Rock Salt',
            fontSize: '84px',
            fontWeight: 'bold',
            lineHeight: '90%',
            letterSpacing: '3%'
        }
    },
  })

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
                    top="30%"
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="5em"
                    color="#DFFAF9"
                    textAlign="center"
                    textShadow="1px 1px 2px black, 0 0 10px #30A6F1, 0 0 0.2em #30A6F1"
                    textStyle="h1"
                    onMouseEnter={() => setIsShown(true)} >
                    KATRINA GUCILATAR
                </Heading>
                {isShown && (
                    <>
                    <Heading
                    position="absolute" 
                    top="53%"
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="2em"
                    color="black"
                    textAlign="center"
                    textShadow="1px 1px 2px white, 0 0 10px #30A6F1, 0 0 0.2em #30A6F1"
                    textStyle="h1">Check out my interactive resume <Link color="#F41B94" textShadow="1px 1px 2px black, 0 0 10px #30A6F1, 0 0 0.2em #30A6F1">HERE</Link></Heading>
                    <Heading
                    position="absolute" 
                    top="63%"
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="2em"
                    color="black"
                    textAlign="center"
                    textShadow="1px 1px 2px white, 0 0 10px #30A6F1, 0 0 0.2em #30A6F1"
                    textStyle="h1">Check out my projects <Link color="#F41B94" textShadow="1px 1px 2px black, 0 0 10px #30A6F1, 0 0 0.2em #30A6F1">HERE</Link></Heading>
                    <Heading 
                    textStyle="h1"
                    position="absolute" 
                    bottom="15px" 
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="4em"
                    color="#DFFAF9"
                    textAlign="center"
                    textShadow="1px 1px 2px black, 0 0 10px #30A6F1, 0 0 0.2em #30A6F1"
                    >Full-Stack Web Developer</Heading>
                    </>
                )}
            </VStack>
            <Flex>
                <Image
                    width="250px"
                    height="600px"
                    src="./images/backgroundimage.jfif"
                    alt="colored dragon/koi fish art"
                    transform="rotate(30deg)"
                    boxShadow="0 0 5px 10px #DDF8ED"
                    borderRadius="10px"
                />
                <Spacer />
                <Image
                    width="250px"
                    height="600px"
                    src="./images/backgroundimage.jfif"
                    alt="colored dragon/koi fish art"
                    transform="rotate(-30deg)"
                    boxShadow="0 0 5px 10px #DDF8ED"
                />
            </Flex>
        </Box>
    )
}

export default Homepage;