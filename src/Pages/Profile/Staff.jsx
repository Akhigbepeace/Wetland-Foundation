import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "assets/image.png";

const Staff = () => {
  const staffs = [
    {
      pic: image,
      name: "Mr. Kelvin Enumah",
      post: "Programme Coordinator and Sustainability Manager",
    },
    {
      pic: image,
      name: "Mr Obinna Oliseneku",
      post: "",
    },
    {
      pic: image,
      name: "Miss Anele Chidera",
      post: "",
    },
    {
      pic: image,
      name: "Mr Ochi Donatus",
      post: "",
    },
    {
      pic: image,
      name: "Mr Akubude Arinze",
      post: "",
    },
    {
      pic: image,
      name: "Mr Chikwado Edeh",
      post: "",
    },
  ];
  return (
    <Box>
      <Heading
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
        mb="26px"
        color="#2C4E2A"
      >
        PROJECT STAFF
      </Heading>
      <Grid
        gridTemplateColumns={{
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        gridGap="87px"
        mb="150px"
      >
        {staffs.map((staff, index) => {
          return (
            <Flex key={index} flexDirection="column" alignItems="center">
              <Image
                src={staff.pic}
                alt="staff"
                w={{
                  sm: "100%",
                  md: "259px",
                  lg: "359px",
                  xl: "417px",
                  "2xl": "417px",
                }}
                h={{
                  sm: "141px",
                  md: "241px",
                  lg: "241px",
                  xl: "314px",
                  "2xl": "314px",
                }}
                objectFit="cover"
              />
              <Heading
                fontFamily="Manrope"
                fontSize={{
                  sm: "16px",
                  md: "22px",
                  lg: "28px",
                  xl: "34px",
                  "2xl": "34px",
                }}
                fontWeight="700"
                textAlign="center"
                mt="20px"
              >
                {staff.name}
              </Heading>
              <Text
                fontFamily="Manrope"
                fontSize={{
                  sm: "15px",
                  md: "15px",
                  lg: "15px",
                  xl: "25px",
                  "2xl": "25px",
                }}
                fontWeight="400"
                color="#2C4E2A"
                textAlign="center"
                mt="5px"
              >
                {staff.post}
              </Text>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Staff;
