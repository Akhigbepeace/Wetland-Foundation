import { Box, Grid, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

const Philosophy = () => {
  const ourValues = [
    {
      name: "Mission",
      text: "To foster partnerships, implement and manage social innovative projects focused on education, health, and skill development,while ensuring compliance to christian values and principles.",
    },
    {
      name: "Vision",
      text: "To foster partnerships, implement and manage social innovative projects focused on education, health, and skill development,while ensuring compliance to christian values and principles.",
    },
    {
      name: "Core Values",
      text: ["Service", "Communication", "Human Dignity", "Integrity"],
    },
  ];

  return (
    <Box bg="#BDE3AB">
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        mt="117px"
        gridGap="94px"
        py="120px"
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        {ourValues.map((ourValue, index) => {
          const coreValues = Array.isArray(ourValue.text)
            ? ourValue.text.map((coreValues, index) => (
                <UnorderedList key={index}>
                  <ListItem textAlign="initial">{coreValues}</ListItem>
                </UnorderedList>
              ))
            : ourValue.text;
          return (
            <Box key={index}>
              <Heading
                textAlign="center"
                fontFamily="Visual Hollow Script"
                fontSize="70px"
                fontWeight="400"
                color="#2C4E2A"
              >
                {ourValue.name}
              </Heading>
              <Box
                textAlign="center"
                fontFamily="Manrope"
                fontSize="18px"
                fontWeight="400"
              >
                {coreValues}
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Philosophy;
