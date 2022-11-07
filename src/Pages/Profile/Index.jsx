import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "component/Navbar";
import OurGoals from "./OurGoals";
import AboutUs from "./AboutUs";
import Philosophy from "./Philosophy";
import OurWork from "./OurWork";
import Staff from "./Staff";
import Board from "./Board";
import Contact from "Pages/Profile/contact/index";
import Footer from "component/Footer/index";

const Index = () => {
  return (
    <Box>
      <Navbar />
      <OurGoals />
      <Box w="1200px" h="2px" bg="#C9CECA" mx="auto" my="65px" />
      <AboutUs />
      <Philosophy />
      <OurWork />
      <Board />
      <Staff />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Index;
