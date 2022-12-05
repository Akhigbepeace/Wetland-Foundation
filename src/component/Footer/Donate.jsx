import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Donate = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems={{
        sm: "center",
        md: "center",
        lg: "center",
        xl: "flex-start",
        "2xl": "flex-start",
      }}
      justifyContent="space-between"
    >
      <Box>
        <Heading
          fontFamily="Mulish"
          fontWeight="800"
          color="white"
          textAlign={{
            sm: "center",
            md: "center",
            lg: "center",
            xl: "left",
            "2xl": "left",
          }}
        >
          Donate
        </Heading>

        <Text
          w="315px"
          my="20px"
          fontFamily="Mulish"
          fontWeight="500"
          fontSize={{
            sm: "18px",
            md: "18px",
            lg: "18px",
            xl: "20px",
            "2xl": "23px",
          }}
          color="white"
          textAlign={{
            sm: "center",
            md: "center",
            lg: "center",
            xl: "left",
            "2xl": "left",
          }}
        >
          All Entities depend on the financial support of donors like you in
          order to complete the various projects. Donation of any size is very
          much encouraged.
        </Text>
      </Box>

      <Button
        bg="#FFF"
        color="#2C4E2A"
        w={{
          sm: "106px",
          md: "135px",
          lg: "150px",
          xl: "207px",
          "2xl": "207px",
        }}
        borderRadius="5px"
        fontFamily="Mulish"
        fontWeight="400"
        fontSize={{
          sm: "15px",
          md: "17px",
          lg: "20px",
          xl: "24px",
          "2xl": "24px",
        }}
        h={{
          sm: "38px",
          md: "38px",
          lg: "50px",
          xl: "55px",
          "2xl": "65px",
        }}
      >
        Donate
      </Button>

      <Box
        w="100%"
        h="2px"
        bg="#FFF"
        mx="auto"
        my="36px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      />
    </Flex>
  );
};

export default Donate;
