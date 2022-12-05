import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "component/Navbar";
import Showcase from "Pages/Home/Showcase/Index";
import Project from "Pages/Home/Project";
import About from "./About";
import ProjectDesc from "./ProjectDesc";
import FAQs from "Pages/Home/FAQs";
import Footer from "component/Footer/index";
import MobileProjectDesc from "./MobileProjectDesc";
import desktopMap from "assets/desktopMap.png";
const Index = () => {
  return (
    <Box position="relative">
      <Flex
        justifyContent="right"
        w={{
          xl: "100%",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        <Image
          src={desktopMap}
          alt="desktopMap"
          position="absolute"
          zIndex="-5"
          w="700px"
          h="800px"
          objectFit="cover"
          display={{
            sm: "none",
            xl: "block",
          }}
        />
      </Flex>
      <Navbar />
      <Showcase />
      <Project />
      <Box w="80%" h="2px" bg="#C9CECA" mx="auto" my="80px" />
      <About />
      <ProjectDesc />
      <MobileProjectDesc />
      <FAQs />
      <Footer />
    </Box>
  );
};
export default Index;
