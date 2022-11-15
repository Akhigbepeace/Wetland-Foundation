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
    <Box
      w={{
        xl: "416px",
        "2xl": "416px",
      }}
    >
      <Heading
        color="#fff"
        fontFamily="Mulish"
        fontWeight="800"
        fontSize={{
          sm: "30px",
          md: "35px",
          lg: "45px",
          xl: "48px",
          "2xl": "48px",
        }}
        mb={{
          sm: "10px",
          md: "10px",
          lg: "10px",
          xl: "36px",
          "2xl": "36px",
        }}
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
      <Text
        color="#fff"
        fontFamily="Mulish"
        fontWeight="300"
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
        lineHeight="36px"
        mt={{
          sm: "10px",
          md: "10px",
          lg: "10px",
          xl: "36px",
          "2xl": "36px",
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

      <Flex
        mt={{
          sm: "24px",
          md: "24px",
          lg: "24px",
          xl: "90px",
          "2xl": "90px",
        }}
        justifyContent={{
          sm: "center",
          md: "center",
          lg: "center",
          xl: "left",
          "2xl": "left",
        }}
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
    </Box>
  );
};

export default ReachOut;
