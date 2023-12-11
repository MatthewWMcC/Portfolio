import { IHobby } from "../../constants/types";
import Gaming from "../../sections/hobbies/gaming";
import Geography from "../../sections/hobbies/geography";
import Kayaking from "../../sections/hobbies/kayaking";
import { Container, Flex, Text } from "@chakra-ui/react";
import fs from "fs";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { hobby } = await getHobby(slug);
  const { id, title, description } = hobby;
  return (
    <Container maxW="container.xl" padding={{ base: 6, sm: 8 }}>
      <Flex align="center" direction="column">
        <Flex
          direction={"column"}
          gap={2}
          w={"full"}
          maxW={{ base: "400px", sm: "700px", lg: "800px" }}
          align={"center"}
        >
          <Text fontSize={"2xl"}>{title}</Text>
          <Text fontSize={["md", "lg"]} mb={10}>
            {description}
          </Text>
          {id === "geography" && <Geography />}
          {id === "kayaking" && <Kayaking />}
          {id === "gaming" && <Gaming />}
        </Flex>
      </Flex>
    </Container>
  );
}

const getHobby = async (slug: string): Promise<{ hobby: IHobby }> => {
  const hobby = JSON.parse(
    fs.readFileSync(
      process.cwd() + `/public/content/hobbies/${slug}.json`,
      "utf-8"
    )
  );
  return {
    hobby: hobby,
  };
};
