import React, { Fragment } from "react";
import Navbar from "component/Navbar";
import ProjectAndPartners from "./ProjectAndPartners";
import Footer from "component/Footer/index";

const Index = () => {
  return (
    <Fragment>
      <Navbar />
      <ProjectAndPartners />
      <Footer />
    </Fragment>
  );
};

export default Index;
