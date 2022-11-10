import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Map from "Pages/Home/Showcase/Map";
import ShowcaseContent from "Pages/Home/Showcase/ShowcaseContent";

const Index = () => {
  return (
    <Box>
      <Flex
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        <ShowcaseContent />
        <Map />
      </Flex>
    </Box>
  );
};

export default Index;
