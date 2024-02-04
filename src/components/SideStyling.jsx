import { Flex, Image, Spacer } from '@chakra-ui/react';

const SideStyling = () => {
    return (
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
    )
}

export default SideStyling;