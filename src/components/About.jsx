import { Box, Heading, Flex, Avatar, SimpleGrid, Card, CardHeader, CardBody, Text } from '@chakra-ui/react'

const AboutMe = () => {
    return (
        <Box>
            <Box>
                <Heading>ABOUT ME</Heading>
            </Box>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                <Card maxW='md'>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                <Box>
                                    <Heading size='sm'>Segun Adebayo</Heading>
                                    <Text>Creator, Chakra UI</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            With Chakra UI, I wanted to sync the speed of development with the speed
                            of design. I wanted the developer to be just as excited as the designer to
                            create a screen.
                        </Text>
                    </CardBody>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                <Box>
                                    <Heading size='sm'>Segun Adebayo</Heading>
                                    <Text>Creator, Chakra UI</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            With Chakra UI, I wanted to sync the speed of development with the speed
                            of design. I wanted the developer to be just as excited as the designer to
                            create a screen.
                        </Text>
                    </CardBody>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                <Box>
                                    <Heading size='sm'>Segun Adebayo</Heading>
                                    <Text>Creator, Chakra UI</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            With Chakra UI, I wanted to sync the speed of development with the speed
                            of design. I wanted the developer to be just as excited as the designer to
                            create a screen.
                        </Text>
                    </CardBody>
                </Card>
                <Card maxW='md'>
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                <Box>
                                    <Heading size='sm'>Segun Adebayo</Heading>
                                    <Text>Creator, Chakra UI</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text>
                            With Chakra UI, I wanted to sync the speed of development with the speed
                            of design. I wanted the developer to be just as excited as the designer to
                            create a screen.
                        </Text>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    )
}

export default AboutMe;
