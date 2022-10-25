import { Box, Grid, Heading, Image } from "@chakra-ui/react";
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
        fontSize="60px"
        fontWeight="800"
        pt="86px"
        mb="26px"
        color="#2C4E2A"
      >
        BOARD OF TRUSTEES
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
        pb="150px"
      >
        {boards.map((board, index) => {
          return (
            <Box key={index}>
              <Image
                src={board.pic}
                alt="board"
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
                {board.name}
              </Heading>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Board;
