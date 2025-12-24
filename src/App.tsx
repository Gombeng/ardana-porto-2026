import { Box } from "@chakra-ui/react";
import Home from "./pages/home";
import Service from "./pages/services";
import Works from "./pages/works";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <Box>
      <Box bg={"bg.subtle"} maxW={"full"}>
        <Navbar />
      </Box>

      <Home />
      <Service />
      <Works />
    </Box>
  );
}
