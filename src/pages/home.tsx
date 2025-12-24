import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      p={"5"}
      maxW={"6xl"}
      minH={"60svh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        w={"full"}
        flexDir={{ base: "column-reverse", md: "row" }}
        justifyContent={"space-between"}
        gap={{ base: "5", md: "9" }}
        alignItems={"center"}
      >
        <Box flex={1}>
          <Heading fontWeight={"bold"} fontSize={"2xl"}>
            Hello!
          </Heading>
          <Heading fontWeight={"bold"} fontSize={"2xl"} mb={"3"}>
            I'm, Ardana.
          </Heading>
          <Text mb={"5"} maxW={"lg"}>
            I design and build sharp web products. Frontend systems, UI
            architecture, and real-world execution.
          </Text>
          <Button>Let's Chat!</Button>
        </Box>
        <Box flex={1}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            justifySelf={"end"}
            maxW={{ md: "xs", lg: "sm" }}
            border={"3px solid"}
            boxShadow={"3px 3px 0 black"}
            // m={"5"}
          />
        </Box>
      </Flex>
    </Container>
  );
}
