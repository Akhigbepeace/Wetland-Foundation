import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { PROJECTS } from "data/project";

const Project = () => {
  const scroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Grid
      gridTemplateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(5, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      gridGap="20px"
      w={{
        sm: "300px",
        md: "500px",
        lg: "750px",
        xl: "1200px",
        "2xl": "1300px",
      }}
      mx="auto"
      mb="20px"
    >
      {PROJECTS.map((project, index) => {
        return (
          <Box key={index} onClick={() => scroll(project.id)} cursor="pointer">
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              bg="#F7F9F8"
              p="20px"
              border="1px solid rgba(163, 163, 163, 0.18)"
              w="230px"
              h="190px"
              mx="auto"
            >
              <Box
                bg={project.bg1}
                display="block"
                w="50px"
                p="10px"
                borderRadius="5px"
              >
                <Image src={project.icon} w="32px" h="32px" m="auto" />
              </Box>
              <Heading
                textAlign="center"
                fontFamily="Mulish"
                fontWeight="800"
                fontSize="24px"
                py="20px"
              >
                {project.title}
              </Heading>
            </Flex>
          </Box>
        );
      })}
    </Grid>
  );
};

export default Project;
