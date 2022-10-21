import { Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Navbar from "component/Navbar";

const Index = () => {
  return (
    <Fragment>
      <Box
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        <Navbar />
      </Box>
    </Fragment>
  );
};
export default Index;
