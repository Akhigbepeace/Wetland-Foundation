import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "component/Navbar";
import Showcase from "Pages/Home/Showcase/Index";
import Project from "Pages/Home/Project";
import About from "./About";
import ProjectDesc from "./ProjectDesc";
import FAQs from "Pages/Home/FAQs";
import Footer from "component/Footer/index";
import MobileProjectDesc from "./MobileProjectDesc";
const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <Showcase />
      <Project />
      <Box w="80%" h="2px" bg="#C9CECA" mx="auto" my="80px" />
      <About />
      <ProjectDesc />
      <MobileProjectDesc />
      <FAQs />
      <Footer />
    </Fragment>
  );
};
export default Index;
