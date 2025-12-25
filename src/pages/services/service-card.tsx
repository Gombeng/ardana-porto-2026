import {
  Box,
  Button,
  Card,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { getServiceChatLink } from "../../utils";
import { BiChat } from "react-icons/bi";

interface IServiceCard {
  icon: IconType;
  title: string;
  desc: string;
  cta: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  desc,
  cta,
}: IServiceCard) {
  return (
    <Card.Root>
      <Card.Body>
        <VStack align="start" gap="4">
          <Box
            border="3px solid"
            boxShadow={"3px 3px 0 black"}
            p="3"
            display="inline-flex"
          >
            <Icon size={30} />
          </Box>

          <Heading size="lg">{title}</Heading>

          <Text color="fg.muted">{desc}</Text>
        </VStack>
      </Card.Body>
      <Card.Footer pt={0}>
        <Link
          href={getServiceChatLink(title)}
          target="_blank"
          rel="noopener noreferrer"
          textDecor={"none"}
        >
          <Button alignItems={"center"} gap={"3"}>
            {cta}
            <BiChat />
          </Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
