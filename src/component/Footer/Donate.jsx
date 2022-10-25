import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Donate = () => {
  return (
    <Box w="416px" px="25px">
      <Heading
        fontFamily="Mulish"
        fontWeight="800"
        fontSize="48px"
        color="white"
      >
        Donate
      </Heading>
      <Text
        mt="36px"
        fontFamily="Mulish"
        fontWeight="500"
        fontSize="23px"
        color="white"
      >
        All Entities depend on the financial support of donors like you in order
        to complete the various projects. Donation of any size is very much
        encouraged.
      </Text>
      <Button
        bg="#FFF"
        color="#2C4E2A"
        w="207px"
        borderRadius="5px"
        fontFamily="Mulish"
        fontWeight="400"
        fontSize="28px"
        h="65px"
        mt="50px"
      >
        Donate
      </Button>
    </Box>
  );
};

export default Donate;
