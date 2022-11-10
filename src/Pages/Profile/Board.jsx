import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import image from "assets/image.png";

const Board = () => {
  const boards = [
    {
      pic: image,
      name: "Mr Ochi Donatus",
    },
    {
      pic: image,
      name: "Mr Akubude Arinze",
    },
    {
      pic: image,
      name: "Mr Chikwado Edeh",
    },
    {
      pic: image,
      name: "Mr Ochi Donatus",
    },
    {
      pic: image,
      name: "Mr Akubude Arinze",
    },
    {
      pic: image,
      name: "Mr Chikwado Edeh",
    },
  ];

  return (
    <Box bg="#BDE3AB">
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
        BOARD OF TRUSTEES
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
        pb="150px"
      >
        {boards.map((board, index) => {
          return (
            <Flex key={index} flexDirection="column" alignItems="center">
              <Image
                src={board.pic}
                alt="board"
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
                {board.name}
              </Heading>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Board;
