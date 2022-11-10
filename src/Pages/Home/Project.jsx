import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Project = () => {
  const projects = [
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/graduation-cap_2_1_dstb14.png",
      title: "Education",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(66, 174, 97, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/protest_1_lvqq9i.png",
      title: "Youth Empowerment",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(236, 173, 56, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/technical-support_2_hrqgi7.png",
      title: "TVET",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(22, 115, 240, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/team_1_tdwdf4.png",
      title: "Community Developmet",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(89, 8, 117, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/heart-beat_1_pvdpqw.png",
      title: "Healthcare",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(229, 40, 54, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/graduation-cap_2_1_dstb14.png",
      title: "Education",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(66, 174, 97, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/protest_1_lvqq9i.png",
      title: "Youth Empowerment",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(236, 173, 56, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/technical-support_2_hrqgi7.png",
      title: "TVET",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(22, 115, 240, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/team_1_tdwdf4.png",
      title: "Community Developmet",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(89, 8, 117, 0.15)",
    },
    {
      icon: "https://res.cloudinary.com/wavecrest1/image/upload/v1666785163/wetland/heart-beat_1_pvdpqw.png",
      title: "Healthcare",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      bg: "rgba(229, 40, 54, 0.15)",
    },
  ];
  return (
    <Flex gridGap="20px" w="1300px" mx="auto" mb="20px" overflowX="scroll">
      {projects.map((project, index) => {
        return (
          <Flex
            key={index}
            flexDirection="column"
            alignItems="center"
            bg="#F7F9F8"
            p="20px"
            border="1px solid rgba(163, 163, 163, 0.18)"
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
            <Text textAlign="center">{project.text}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Project;
