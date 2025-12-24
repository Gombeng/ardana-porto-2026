import {
  Button,
  CloseButton,
  Drawer,
  Flex,
  Link,
  Portal,
} from "@chakra-ui/react";
import { LINKS } from "./const";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Drawer.Root open={open} onOpenChange={handleClick}>
      <Drawer.Trigger asChild display={{ base: "block", md: "none" }}>
        <Button size={"xs"}>
          <LuMenu />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body mt={20}>
              <Flex gap={"7"} flexDir={"column"}>
                {LINKS.map((link) => (
                  <Link
                    fontSize={"md"}
                    fontWeight={"bold"}
                    href={link.href}
                    textDecor={"none"}
                    borderStart={"6px solid white"}
                    p={1}
                    ps={3}
                    transition="all 0.15s ease"
                    _hover={{
                      borderStart: "6px solid",
                    }}
                    onClick={handleClick}
                    outline={'none'}
                  >
                    {link.title}
                  </Link>
                ))}
              </Flex>
            </Drawer.Body>
            <Drawer.Footer>
              <Button>Let's Chat!</Button>
            </Drawer.Footer>

            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" variant={"solid"} me={3} />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}
