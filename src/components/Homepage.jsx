import { Box, Heading, Image, VStack, Flex, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import React, { useState } from 'react';
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
                    <Breadcrumb
                    fontFamily="Rock Salt"
                    separator='-'
                    color="white"
                    textShadow="1px 1px 2px black, 0 0 20px #0E1A51, 0 0 0.2em #30A6F1"
                    position="absolute" 
                    top="42%"
                    left="50%" 
                    transform="translate(-50%,-50%)"
                    fontSize="2em"
                    boxShadow="10px 10px 15px 12px #F41B94"
                    className="animate__animated animate__zoomInDown">
                        <BreadcrumbItem backgroundColor="#F41B94">
                            <BreadcrumbLink href='#'>About Me</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem backgroundColor="#F41B94">
                            <BreadcrumbLink href='#'>Projects</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem backgroundColor="#F41B94">
                            <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
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
                    >Full-Stack Web Developer</Heading>
                    </>
                )}
            </VStack>
            <Flex>
                <Image
                    width="250px"
                    height="100vh"
                    src="./images/backgroundimage.png"
                    alt="colored dragon/koi fish art"
                />
                <Spacer />
                <Image
                    width="250px"
                    height="100vh"
                    src="./images/backgroundimage.png"
                    alt="colored dragon/koi fish art"
                />
            </Flex>
        </Box>
    )
}

export default Homepage;