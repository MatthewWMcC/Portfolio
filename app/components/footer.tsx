import {
  Box,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Divider from "./divider";

export default function Footer() {
  return (
    <Flex justify={"space-between"} gap={2} direction={["column", "row"]}>
      <Box textAlign={["center", "start"]}>
        <Text>
          {"Thank you for sticking around to the end! Want to know more? "}
        </Text>
        <Text>
          {"Reach out @ "}
          <Link color="teal.500" href={"mailto:matthewwmccracken@gmail.com"}>
            matthewwmccracken@gmail.com
          </Link>
        </Text>
      </Box>
      <Box textAlign={["center", "end"]}>
        <Text>{"This site is a work in progress."}</Text>
        <Text>{"Owned and operated by Matthew McCracken."}</Text>
      </Box>
    </Flex>
  );
}
