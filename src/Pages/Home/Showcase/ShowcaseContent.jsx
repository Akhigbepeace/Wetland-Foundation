import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import ikota from "assets/ikota.png";
import ecs from "assets/ecs.png";
import womensboard from "assets/womensboard.png";
import pau from "assets/pau.png";

const ShowcaseContent = () => {
  const navigate = useNavigate();
  const donates = [
    {
      bg: "#2C4E2A",
      name: "Partner",
      color: "white",
      hoverBg: "#142413",
      hoverBorder: "#142413",
      hoverColor: "#BDE3AB",
      to: () => {
        navigate("/partners", { replace: true });
      },
    },
    {
      bg: "#FFF",
      name: "Donate",
      hoverBg: "#EBEDEF",
      to: () => {
        navigate("#", { replace: true });
      },
    },
  ];

  const partners = [ikota, womensboard, ecs, pau];
  return (
    <Flex flexDirection="column">
      <Box w="50%">
        <Heading
          fontFamily="Mulish"
          fontWeight="800"
          fontSize="40px"
          color="#2C4E2A"
        >
          Wetland Cultural and Education Foundation
        </Heading>
        <Text
          fontFamily="Manrope"
          fontWeight="400"
          fontSize="30px"
          mt="5px"
          lineHeight="40px"
        >
          We foster partnerships,implement and manage social innovative projects
          focused on human
        </Text>
        <Flex mt="20px" justifyContent="space-between">
          {donates.map((donate, index) => {
            return (
              <Button
                key={index}
                bg={donate.bg}
                color={donate.color}
                w="140px"
                h="47px"
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="18px"
                border="2px solid #2C4E2A"
                borderRadius="2px"
                transition="all ease 0.5s"
                onClick={donate.to}
                _hover={{
                  bg: donate.hoverBg,
                  color: donate.hoverColor,
                  border: `2px solid ${donate.hoverBorder}`,
                }}
              >
                {donate.name}
              </Button>
            );
          })}
        </Flex>

        <Flex
          borderTop="1px solid #C9CECA"
          borderBottom="1px solid #C9CECA"
          py="10px"
          justifyContent="space-between"
          mb="84px"
          mt="50px"
        >
          {partners.map((partner, index) => {
            return (
              <Image
                key={index}
                src={partner}
                alt="partner"
                w="120px"
                h="50px"
              />
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ShowcaseContent;
