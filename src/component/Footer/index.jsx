import React from "react";
import ReachOut from "./ReachOut";
import Donate from "./Donate";
import Newsletter from "./Newsletter";
import { Box, Grid, Text } from "@chakra-ui/react";

const index = () => {
  return (
    <Box bg="#2C4E2A">
      <Grid
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "grid",
          "2xl": "grid",
        }}
        gridTemplateColumns={{
          xl: "repeat(3, auto)",
          "2xl": "repeat(3, auto)",
        }}
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
      </Grid>

      <Box
        w="80%"
        h="2px"
        bg="#FFF"
        mx="auto"
        mb="36px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      />

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
