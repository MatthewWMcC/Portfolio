import { Box, Flex, Icon, IconButton, Image, Text, useClipboard, useColorModeValue } from "@chakra-ui/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdContentCopy, MdOutlineAlternateEmail, MdOutlineSchool } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";


export default function ProfileCard() {
    const { onCopy } = useClipboard("matthewwmccracken@gmail.com");

    return (
        <Box h={"100vh"} rounded={"md"} maxW={"sm"} bg={useColorModeValue("gray.100", "gray.700")}
        >
            <Box>
                <Text size="lg">Matthew McCracken</Text>
            </Box>
            <Image src="./profile.jpg" alt=""></Image>
            <Flex bg={useColorModeValue("blue.400", "blue.700")}>
                <Icon as={HiMagnifyingGlass} />
                <Text size="md">Looking for roles in Software Development and Design</Text>
            </Flex>
            <Box>
                <Flex>
                    <Icon as={MdOutlineSchool} />
                    <Text size="md">Bachelors of Software Engineering from McMaster University</Text>
                </Flex>
                <Flex>
                    <Icon as={CiLocationArrow1} />
                    <Text size="md">Hamilton, ON</Text>
                </Flex>
                <Flex>
                    <Icon as={MdOutlineAlternateEmail} />
                    <Text size="md">matthewwmccracken@gmail.com</Text>
                    <IconButton
                        bg="transparent"
                        icon={<Icon as={MdContentCopy} />}
                        aria-label="copy email to clipboard"
                        onClick={onCopy}
                    />
                </Flex>
            </Box>
        </Box>
    );
}
