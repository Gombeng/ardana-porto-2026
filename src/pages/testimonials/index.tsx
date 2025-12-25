import {
  Container,
  Flex,
  Heading,
  ScrollArea,
  Text,
  VStack,
} from "@chakra-ui/react";
import { TESTIMONIALS } from "./const";
import TestiCard from "./testi-card";

export default function Testimonials() {
  return (
    <Container py="10" id="testimonials" maxW={"6xl"}>
      <VStack>
        <Heading fontWeight={"bold"} fontSize={"2xl"} bg={"white"}>
          Testimonials
        </Heading>
        <Text
          color="fg.muted"
          maxW="lg"
          textAlign="center"
          mb={"8"}
          bg={"white"}
        >
          What's my client are saying!
        </Text>

        <ScrollArea.Root>
          <ScrollArea.Viewport>
            <ScrollArea.Content>
              <Flex gap="6" flexWrap="nowrap" pb={2}>
                {TESTIMONIALS.map((testi, idx) => (
                  <TestiCard key={idx} {...testi} />
                ))}
              </Flex>
            </ScrollArea.Content>
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      </VStack>
    </Container>
  );
}
