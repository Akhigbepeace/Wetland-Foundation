import React from "react";
import Form from "./Form";
import Directions from "./Directions";
import { Box, Flex, Heading } from "@chakra-ui/react";

const index = () => {
  return (
    <Box bg="#BDE3AB">
      <Heading
        fontFamily="Mulish"
        fontWeight="800"
        fontSize="60px"
        textAlign="center"
        color="#2C4E2A"
        pt="103px"
      >
        CONTACT US
      </Heading>
      <Flex
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        mt="75px"
        pb="168px"
      >
        <Form />
        <Directions />
      </Flex>
    </Box>
  );
};

export default index;
