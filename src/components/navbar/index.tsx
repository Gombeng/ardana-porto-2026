import { Container, Flex, Image, Link } from "@chakra-ui/react";
import { LogoDesktop, LogoMobile } from "../../assets/images";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

export default function Navbar() {
  return (
    <Container p={{ base: 3, md: 0 }} px={0} maxW={"6xl"} id="navbar">
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Link
          outline={"none"}
          w={"20"}
          display={{ base: "block", md: "none" }}
          href="#home"
        >
          <Image src={LogoMobile} />
        </Link>

        <Link
          outline={"none"}
          w={"32"}
          display={{ base: "none", md: "block" }}
          href="#home"
        >
          <Image src={LogoDesktop} />
        </Link>

        <MobileMenu />
        <DesktopMenu />
      </Flex>
    </Container>
  );
}
