import { Box, Divider as ChakraDivider } from "@chakra-ui/react";

export default function ScrollTo({ id }: { id: string }) {
  return (
    <>
      <Box position={"relative"} id={id} top={"-70px"}></Box>
    </>
  );
}
