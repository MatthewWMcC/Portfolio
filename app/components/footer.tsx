import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      justify={"space-between"}
      gap={2}
      direction={["column", "row"]}
      fontSize={["sm", "sm", "md"]}
    >
      <Box textAlign={["center", "start"]}>
        <Text>
          {"Thank you for sticking around to the end! Want to know more? "}
        </Text>
        <Text>
          {"Reach out @ "}
          <Link
            variant={"inline"}
            href={"mailto:matthewwmccracken@gmail.com"}
            isExternal={true}
          >
            matthewwmccracken@gmail.com
          </Link>
        </Text>
      </Box>
      <Flex
        textAlign={["center", "end"]}
        alignItems={"end"}
        justifyContent={"center"}
      >
        <Text>{"Created by Matthew McCracken."}</Text>
      </Flex>
    </Flex>
  );
}
