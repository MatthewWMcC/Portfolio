import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import HobbyThumbnail from "../components/hobby-thumbnail";
import fs from "fs";
import { IHobby } from "../constants/types";

export default async function Hobbies() {
  const { hobbies } = await getHobbies();

  return (
    <Flex align="center" direction="column" minH="calc(50vh )">
      <Box id="Hobbies"></Box>
      <Text fontSize="3xl">Hobbies</Text>
      <Text fontSize="md">Click on each section to see more.</Text>
      <br></br>
      <Grid
        w={{ base: "100%" }}
        maxW={{ base: "200px", sm: "800px" }}
        gap={[4, 4, 6]}
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]}
        placeItems="center"
      >
        {hobbies.map(({ slug, hobby }) => {
          return <HobbyThumbnail key={hobby.id} slug={slug} hobby={hobby} />;
        })}
      </Grid>
    </Flex>
  );
}

const getHobbies = async (): Promise<{
  hobbies: { slug: string; hobby: IHobby }[];
}> => {
  const files = fs.readdirSync("public/content/hobbies");

  const hobbies = files
    .map((fileName) => {
      const slug = fileName.replace(".json", "");
      const data = JSON.parse(
        fs.readFileSync(`public/content/hobbies/${fileName}`, "utf-8")
      );

      return {
        slug,
        hobby: data,
      };
    })
    .sort((a, b) => a.hobby.order - b.hobby.order);

  return {
    hobbies: hobbies,
  };
};
