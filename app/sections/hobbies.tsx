import {
  Box,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { hobbyThumbnails } from "../constants";
import HobbyThumbnail from "../components/hobby-thumbnail";
import fs from "fs";

export default async function Hobbies() {
  const { props } = await getHobbies();
  console.log(props.hobbies);

  return (
    <Flex align="center" direction="column" minH="calc(50vh )">
      <Box id="Hobbies"></Box>
      <Text fontSize="3xl">Hobbies</Text>
      <br></br>
      <Grid
        w={{ base: "100%" }}
        maxW={{ base: "400px", sm: "800px", lg: "1000px" }}
        gap={[4, 2, 8]}
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
        placeItems="center"
      >
        {hobbies.map((hobby) => {
          return <HobbyThumbnail key={hobby.id} hobby={hobby} />;
        })}
      </Grid>
    </Flex>
  );
}

async function getHobbies() {
  const files = fs.readdirSync("public/content/hobbies");

  const hobbies = files.map((fileName) => {
    const slug = fileName.replace(".json", "");
    const data = JSON.parse(
      fs.readFileSync(`public/content/hobbies/${fileName}`, "utf-8")
    );

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      hobbies: hobbies,
    },
  };
}
