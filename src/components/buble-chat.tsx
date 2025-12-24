import { Box } from "@chakra-ui/react";

export default function BubbleChat({ text = "Hello!" }) {
  return (
    <Box
      position="relative"
      p="3"
      bg="bg.subtle"
      border="3px solid"
      borderColor="border.strong"
      borderRadius="12px"
      maxW="fit-content"
      _after={{
        content: '""',
        position: "absolute",
        left: "-10px",
        bottom: "10px",
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderBottom: "12px solid transparent",
        borderRight: "10px solid",
        borderRightColor: "bg.subtle",
      }}
      _before={{
        content: '""',
        position: "absolute",
        left: "-13px",
        bottom: "10px",
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: "13px solid",
        borderRightColor: "border.strong",
      }}
    >
      {text}
    </Box>
  );
}
