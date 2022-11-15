import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const OurGoals = () => {
  const goals = [
    "To achieve a society where human dignity, integrity, social impact, and initiative for the development of people is taken as paramount.",

    "To achieve a society where human dignity, integrity, social impact, and initiative for the development of people is taken as paramount.",

    "To achieve a society where human dignity, integrity, social impact, and initiative for the development of people is taken as paramount.",
  ];
  return (
    <Box bg="#2C4E2A">
      <Heading
        color="#FFF"
        textAlign="center"
        fontFamily="Mulish"
        fontSize={{
          sm: "30px",
          md: "30px",
          lg: "40px",
          xl: "60px",
          "2xl": "60px",
        }}
        fontWeight="800"
        pt="86px"
      >
        OUR GOALS
      </Heading>
      <Grid
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        gridTemplateColumns={{
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        mt="68px"
        gridGap="94px"
        pb="104px"
      >
        {goals.map((goal, index) => {
          return (
            <Box key={index}>
              <Heading
                textAlign="center"
                fontFamily="Mulish"
                fontSize="60px"
                fontWeight="800"
                color="#BDE3AB"
              >
                {index + 1}
              </Heading>
              <Text
                textAlign="center"
                fontFamily="Mulish"
                fontSize="26px"
                fontWeight="400"
                color="white"
              >
                {goal}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurGoals;
