import { Box } from "@chakra-ui/react";
import Home from "./pages/home";
import Service from "./pages/services";
import Works from "./pages/works";
import Navbar from "./components/navbar";
import Testimonials from "./pages/testimonials";
import Footer from "./components/footer";

export default function App() {
  return (
    <Box>
      <Box bg={"bg.subtle"} maxW={"full"}>
        <Navbar />
      </Box>

      <Home />
      <Service />
      <Works />

      <Box bg={"bg.stripped"} maxW={"full"}>
        <Testimonials />
      </Box>

      <Footer />
    </Box>
  );
}
