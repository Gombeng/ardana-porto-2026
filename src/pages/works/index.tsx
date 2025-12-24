import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { WORKS } from "./const";
import WorkCard from "./work-card";

export default function Works() {
  const sortedWorks = [...WORKS].sort((a, b) => {
    const dateA = new Date(a.file.split("_")[0]).getTime();
    const dateB = new Date(b.file.split("_")[0]).getTime();
    return dateB - dateA;
  });

  return (
    <Container py="10">
      <VStack>
        <Heading fontWeight={"bold"} fontSize="2xl">
          Selected Works
        </Heading>
        <Text color="fg.muted" maxW="lg" textAlign="center" mb={"8"}>
          Selected work, built with purpose.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap="6"
          justifyItems="stretch"
        >
          {sortedWorks.map((work, idx) => (
            <WorkCard key={idx} {...work} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
