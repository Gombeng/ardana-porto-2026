import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LogoDesktop } from "../../assets/images";
import { LINKS } from "../navbar/const";
import { getGenericChatLink } from "../../utils";

export default function Footer() {
  return (
    <Box bg={"bg.subtle"}>
      <Container py={"10"}>
        <VStack>
          <Link href={"#navbar"} textDecor={"none"} p={1} outline={"none"}>
            <Image src={LogoDesktop} alt="Logo" w={"8rem"} />
          </Link>

          <Flex
            gap={{ base: "3", md: "6" }}
            flexDir={{ base: "column", sm: "row" }}
            alignItems={"center"}
          >
            {LINKS.map((link, idx) => (
              <Link
                key={idx}
                fontWeight={"medium"}
                fontSize={{ base: "sm", md: "md" }}
                href={link.href}
                textDecor={"none"}
                p={1}
                outline={"none"}
              >
                {link.title}
              </Link>
            ))}
            <Link
              fontWeight={"medium"}
              fontSize={{ base: "sm", md: "md" }}
              textDecor={"none"}
              p={1}
              outline={"none"}
              href={getGenericChatLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Me
            </Link>
          </Flex>
        </VStack>
      </Container>

      <Box h={"1px"} w={"full"} bg={"gray.900"} />

      <VStack py={"5"}>
        <Text fontSize={{ base: "sm", md: "md" }}>
          &copy; 2026 Ardana. All rights reserved
        </Text>
      </VStack>
    </Box>
  );
}
