import { Box, Heading, Image, Stack } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

const Homepage = () => {
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
        > 
            <Heading position="absolute">KATRINA GUCILATAR</Heading>
            <Flex>
                <Image
                    width="250px"
                    height="600px"
                    src="./images/backgroundimage.jfif"
                    alt="colored dragon/koi fish art"
                    transform="rotate(30deg)"
                    boxShadow="0 0 5px 10px #DDF8ED"
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