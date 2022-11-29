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
    <Flex flexDirection="column" justifyContent="space-between">
      <Heading
        color="#fff"
        fontFamily="Mulish"
        fontWeight="800"
        textAlign={{
          sm: "center",
          md: "center",
          lg: "center",
          xl: "left",
          "2xl": "left",
        }}
      >
        Reach Out
      </Heading>

      <Flex
        flexDirection="column"
        my={{
          sm: "20px",
          md: "20px",
          lg: "20px",
        }}
        w="315px"
        mx="auto"
      >
        <Text
          color="#fff"
          fontFamily="Mulish"
          fontWeight="300"
          mb={{
            sm: "5px",
            md: "5px",
            lg: "5px",
            xl: "10px",
            "2xl": "10px",
          }}
          fontSize={{
            sm: "18px",
            md: "18px",
            lg: "18px",
            xl: "20px",
            "2xl": "23px",
          }}
          textAlign={{
            sm: "center",
            md: "center",
            lg: "center",
            xl: "left",
            "2xl": "left",
          }}
          w="315px"
        >
          2, Ahmed Onibudu Street, Victoria Island, Lagos.
        </Text>

        <Box
          display={{
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "block",
            "2xl": "block",
          }}
          color="#fff"
          justifyContent="center"
          fontFamily="Mulish"
          fontWeight="300"
          fontSize={{
            sm: "16px",
            md: "16px",
            lg: "16px",
            xl: "20px",
            "2xl": "23px",
          }}
        >
          <Text>+234 000 000 0000 </Text>

          <Text
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
            px="3px"
          >
            |
          </Text>
          <Text> team@wetland.ng</Text>
        </Box>
      </Flex>

      <Flex
        justifyContent={{
          sm: "center",
          md: "center",
          lg: "center",
          xl: "left",
          "2xl": "left",
        }}
        mt="20px"
      >
        {socialMedia.map((media, index) => {
          return (
            <Link
              key={index}
              to={media.to}
              target="_blank"
              bg="#FFF"
              borderRadius="100%"
              p="10px 10px 5px 10px"
              mr={{
                sm: "13px",
                md: "13px",
                lg: "13px",
                xl: "51px",
                "2xl": "51px",
              }}
            >
              <Icon as={media.icon} w="20px" h="20px" color="#2C4E2A" />
            </Link>
          );
        })}
      </Flex>

      <Box
        w="100%"
        h="2px"
        bg="#FFF"
        mx="auto"
        my="36px"
        display={{
          sm: "block",
          md: "block",
          lg: "block",
          xl: "none",
          "2xl": "none",
        }}
      />
    </Flex>
  );
};

export default ReachOut;
