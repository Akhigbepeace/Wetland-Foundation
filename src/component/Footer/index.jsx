import React from "react";
import ReachOut from "./ReachOut";
import Donate from "./Donate";
import Newsletter from "./Newsletter";
import { Box, Flex, Text } from "@chakra-ui/react";

const index = () => {
  return (
    <Box bg="#2C4E2A">
      <Flex
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        justifyContent="space-between"
        py="135px"
      >
        <ReachOut />
        <Donate />
        <Newsletter />
      </Flex>

      <Box w="80%" h="2px" bg="#FFF" mx="auto" mb="36px" />

      <Text
        fontFamily="Mulish"
        fontWeight="500"
        fontSize="28px"
        textAlign="center"
        color="white"
        pb="43px"
      >
        &copy; 2022. Wetland Cultural
      </Text>
    </Box>
  );
};

export default index;
