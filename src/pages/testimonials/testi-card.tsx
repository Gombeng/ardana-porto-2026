import { Box, Card, Text, VStack } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";

interface ITestiCard {
  name: string;
  role: string;
  location: string;
  message: string;
}

export default function TestiCard({
  name,
  role,
  location,
  message,
}: ITestiCard) {
  return (
    <Card.Root
      minW={{ base: "2xs", md: "xs" }}
      border="1px solid"
      borderColor="gray.200"
    >
      <Card.Body>
        <Text fontSize="sm" color="gray.700" lineHeight="1.7">
          “{message}”
        </Text>
      </Card.Body>

      <Card.Footer pt={0} justifyContent={"space-between"} alignItems={"start"}>
        <VStack align="start" gap="0.25rem">
          <Text fontWeight="600" fontSize="sm">
            {name}
          </Text>

          <Text fontSize="xs" color="gray.600">
            {role}
          </Text>

          <Text fontSize="xs" color="gray.500">
            {location}
          </Text>
        </VStack>

        <Box border={"3px solid"} boxShadow={"3px 3px 0 black"} p={2}>
          <LuUser size={30} />
        </Box>
      </Card.Footer>
    </Card.Root>
  );
}
