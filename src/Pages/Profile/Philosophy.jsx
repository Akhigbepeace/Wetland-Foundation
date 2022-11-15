import { Box, Grid, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { Fragment } from "react";

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
        gridTemplateColumns={{
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
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
                  <ListItem
                    textAlign={{
                      sm: "center",
                      md: "center",
                      lg: "center",
                      xl: "left",
                      "2xl": "left",
                    }}
                    listStyleType={{
                      sm: "none",
                      md: "none",
                      lg: "none",
                      xl: "disc",
                      "2xl": "disc",
                    }}
                  >
                    {coreValues}
                  </ListItem>
                </UnorderedList>
              ))
            : ourValue.text;
          return (
            <Fragment>
              <Box key={index}>
                <Heading
                  textAlign="center"
                  fontFamily="Visual Hollow Script"
                  fontSize={{
                    sm: "50px",
                    md: "50px",
                    lg: "40px",
                    xl: "70px",
                    "2xl": "80px",
                  }}
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
              <Box
                w="80%"
                h="1px"
                bg="#000"
                mx="auto"
                display={{
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                  "2xl": "none",
                }}
              />
            </Fragment>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Philosophy;
