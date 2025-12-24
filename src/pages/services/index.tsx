import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ServiceCard from "./service-card";
import { SERVICES } from "./const";

export default function Service() {
  return (
    <Box bg="bg.stripped" id="services">
      <Container py={"10"}>
        <VStack>
          <Heading fontWeight={"bold"} fontSize={"2xl"} bg={"white"}>
            Services
          </Heading>
          <Text
            color="fg.muted"
            maxW="lg"
            textAlign="center"
            mb={"8"}
            bg={"white"}
          >
            Straightforward web solutions. Built to work.
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
