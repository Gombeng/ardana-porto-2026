import { Button, Flex, Link } from "@chakra-ui/react";
import { LINKS } from "./const";
import { getGenericChatLink } from "../../utils";

export default function DesktopMenu() {
  return (
    <Flex
      gap={{ base: "7", lg: "10" }}
      display={{ base: "none", md: "flex" }}
      me={4}
    >
      {LINKS.map((link) => (
        <Link
          key={link.href}
          fontSize={"md"}
          fontWeight={"bold"}
          href={link.href}
          p={1}
          ps={3}
          transition="all 0.15s ease"
          textDecor={"none"}
          outline={"none"}
        >
          {link.title}
        </Link>
      ))}
      <Link
        href={getGenericChatLink()}
        target="_blank"
        rel="noopener noreferrer"
        textDecor={"none"}
      >
        <Button>Let's Chat!</Button>
      </Link>
    </Flex>
  );
}
