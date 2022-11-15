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
        fontSize={{
          sm: "30px",
          md: "30px",
          lg: "40px",
          xl: "60px",
          "2xl": "60px",
        }}
        textAlign="center"
        color="#2C4E2A"
        pt="103px"
      >
        CONTACT US
      </Heading>
      <Flex
        justifyContent="space-between"
        display={{
          xl: "flex",
          "2xl": "flex",
        }}
        w={{
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        mt="75px"
      >
        <Form />
        <Directions />
      </Flex>
    </Box>
  );
};

export default index;
