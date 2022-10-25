import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
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
        fontSize="60px"
        fontWeight="800"
        pt="86px"
        mb="26px"
        color="#2C4E2A"
      >
        PROJECT STAFF
      </Heading>
      <Grid
        gridTemplateColumns="repeat(3, auto)"
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
            <Box key={index}>
              <Image
                src={staff.pic}
                alt="staff"
                w="417px"
                h="314px"
                objectFit="cover"
              />
              <Heading
                fontFamily="Manrope"
                fontSize="34px"
                fontWeight="700"
                textAlign="center"
                mt="20px"
              >
                {staff.name}
              </Heading>
              <Text
                fontFamily="Manrope"
                fontSize="20px"
                fontWeight="400"
                color="#2C4E2A"
                textAlign="center"
                mt="5px"
              >
                {staff.post}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Staff;
