import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { projectHref } from "data/project";
import { Link } from "react-router-dom";

const Project = () => {
  const projects = [
    {
      id: projectHref[0],
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/graduation-cap_2_1_dstb14.png",
      title: "Education",
      bg: "rgba(66, 174, 97, 0.15)",
    },
    {
      id: projectHref[1],
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/protest_1_lvqq9i.png",
      title: "Youth Empowerment",
      bg: "rgba(236, 173, 56, 0.15)",
    },
    {
      id: projectHref[2],
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/technical-support_2_hrqgi7.png",
      title: "TVET",
      bg: "rgba(22, 115, 240, 0.15)",
    },
    {
      id: projectHref[3],
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/team_1_tdwdf4.png",
      title: "Community Development",
      bg: "rgba(89, 8, 117, 0.15)",
    },
    {
      id: projectHref[4],
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/heart-beat_1_pvdpqw.png",
      title: "Healthcare",
      bg: "rgba(229, 40, 54, 0.15)",
    },
  ];

  console.log(projectHref[4]);

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
      {projects.map((project, index) => {
        return (
          <Link href={project.id}>
            <Flex
              key={index}
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
                bg={project.bg}
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
          </Link>
        );
      })}
    </Grid>
  );
};

export default Project;
