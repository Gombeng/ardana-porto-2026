import { Box, Container, Flex, Image } from "@chakra-ui/react";
import Home from "./pages/home";
import { LogoDesktop, LogoMobile } from "./assets/images";
import Service from "./pages/services";
import Works from "./pages/works";

export default function App() {
  return (
    <Box>
      <Box bg={"bg.subtle"} maxW={"full"}>
        <Container p={"5"} py={"3"} maxW={"8xl"}>
          <Navbar />
        </Container>
      </Box>

      <Home />
      <Service />
      <Works />
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
