import { Box, Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ImFacebook } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";

const ReachOut = () => {
  const socialMedia = [
    {
      icon: FiInstagram,
      to: "",
    },
    {
      icon: TfiLinkedin,
      to: "",
    },
    {
      icon: ImFacebook,
      to: "",
    },
  ];
  return (
    <Box w="416px">
      <Heading
        color="#fff"
        fontFamily="Mulish"
        fontWeight="800"
        fontSize="48px"
        mb="36px"
      >
        Reach Out
      </Heading>
      <Text
        color="#fff"
        fontFamily="Mulish"
        fontWeight="300"
        fontSize="23px"
        lineHeight="36px"
      >
        2, Ahmed Onibudu Street, Victoria Island, Lagos.
      </Text>
      <Box
        color="#fff"
        fontFamily="Mulish"
        fontWeight="300"
        fontSize="23px"
        lineHeight="36px"
        mt="40px"
      >
        <Text>+234 000 000 0000 </Text>
        <Text> team@wetland.ng</Text>
      </Box>

      <Flex mt="90px">
        {socialMedia.map((media, index) => {
          return (
            <Link
              key={index}
              to={media.to}
              target="_blank"
              bg="#FFF"
              borderRadius="100%"
              p="10px 10px 5px 10px"
              mr="51px"
            >
              <Icon as={media.icon} w="20px" h="20px" color="#2C4E2A" />
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ReachOut;
