import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  LiaWindowClose,
  LiaWindowMaximize,
  LiaWindowMinimize,
} from "react-icons/lia";
import Home from "./pages/home";
import { LogoDesktop, LogoMobile } from "./assets/images";

export default function App() {
  return (
    <Box>
      <Box bg={"bg.subtle"} maxW={"full"}>
        <Container p={"5"} py={"3"} maxW={"8xl"}>
          <Navbar />
        </Container>
      </Box>

      <Home />

      <Container p={"5"}>
        <HStack>
          <Button>Click me</Button>
          <Button>Click me</Button>
        </HStack>
      </Container>

      <Container p={"5"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"5"}>
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Navbar() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Box w={"20"} display={{ base: "block", md: "none" }}>
        <Image src={LogoMobile} />
      </Box>

      <Box w={"20"} display={{ base: "none", md: "block" }}>
        <Image src={LogoDesktop} />
      </Box>

      <Box>menu here</Box>
    </Flex>
  );
}

function CardComp() {
  return (
    <Card.Root>
      <Card.Header>
        <Flex
          justifyContent={"space-between"}
          bg={"bg.subtle"}
          p={"5"}
          alignItems={"center"}
        >
          <Flex gap={"1"}>
            <Box display={{ base: "none", sm: "flex" }} gap={"1"}>
              <LiaWindowMinimize size={"20px"} />
              <LiaWindowMaximize size={"20px"} />
            </Box>
            <LiaWindowClose size={"20px"} fill="red" />
          </Flex>
          <Text fontWeight={"bold"} fontSize={"sm"}>
            2026-12-24_Project.html
          </Text>
        </Flex>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          m={"5"}
          border={"3px solid"}
          boxShadow={"3px 3px 0 black"}
        />
      </Card.Header>
      <Card.Body>
        <Heading size="lg"> Card - sm</Heading>
        <Text>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button>See Project</Button>
      </Card.Footer>
    </Card.Root>
  );
}
