import { Box, Button, Flex, Image, Heading, Text } from "@chakra-ui/react";
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
      hoverBg: "#163814",
      hoverBorder: "#163814",
      hoverColor: "#EBEDEF",
      to: () => {
        navigate("/partners", { replace: true });
      },
    },
    {
      bg: "#FFF",
      name: "Donate",
      hoverBg: "#F1F2F3",
      to: () => {
        navigate("#", { replace: true });
      },
    },
  ];

  const partners = [
    {
      img: ikota,
      width: {
        sm: "68px",
        md: "68px",
        lg: "88px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "24px",
        md: "24px",
        lg: "34px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: womensboard,
      width: {
        sm: "56px",
        md: "68px",
        lg: "88px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "40px",
        md: "24px",
        lg: "34px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: ecs,
      width: {
        sm: "74px",
        md: "68px",
        lg: "88px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "33px",
        md: "24px",
        lg: "34px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: pau,
      width: {
        sm: "60px",
        md: "60px",
        lg: "70px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "25px",
        md: "25px",
        lg: "35px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: ecs,
      width: {
        sm: "74px",
        md: "68px",
        lg: "88px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "33px",
        md: "24px",
        lg: "34px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: pau,
      width: {
        sm: "60px",
        md: "60px",
        lg: "70px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "25px",
        md: "25px",
        lg: "35px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: ecs,
      width: {
        sm: "74px",
        md: "68px",
        lg: "88px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "33px",
        md: "24px",
        lg: "34px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: pau,
      width: {
        sm: "60px",
        md: "60px",
        lg: "70px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "25px",
        md: "25px",
        lg: "35px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: ecs,
      width: {
        sm: "74px",
        md: "68px",
        lg: "88px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "33px",
        md: "24px",
        lg: "34px",
        xl: "50px",
        xL: "50px",
      },
    },
    {
      img: pau,
      width: {
        sm: "60px",
        md: "60px",
        lg: "70px",
        xl: "120px",
        xL: "120px",
      },
      height: {
        sm: "25px",
        md: "25px",
        lg: "35px",
        xl: "50px",
        xL: "50px",
      },
    },
  ];
  return (
    <Flex>
      <Box
        w={{
          xl: "50%",
          "2xl": "50%",
        }}
        textAlign={{
          sm: "center",
          md: "center",
          lg: "center",
          xl: "left",
          "2xl": "left",
        }}
      >
        <Heading
          fontFamily="Mulish"
          fontWeight="800"
          fontSize={{
            sm: "25px",
            md: "25px",
            lg: "25px",
            xl: "40px",
            "2xl": "40px",
          }}
          color="#2C4E2A"
        >
          Wetland Cultural and Education Foundation
        </Heading>
        <Text
          fontFamily="Manrope"
          fontWeight="400"
          fontSize={{
            sm: "17px",
            md: "17px",
            lg: "17px",
            xl: "30px",
            "2xl": "30px",
          }}
          mt={{
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "5px",
            "2xl": "5px",
          }}
        >
          We foster partnerships,implement and manage social innovative projects
          focused on human
        </Text>
        <Flex
          mt="20px"
          justifyContent={{
            sm: "center",
            md: "center",
            lg: "center",
            xl: "left",
            "2xl": "left",
          }}
        >
          {donates.map((donate, index) => {
            return (
              <Button
                key={index}
                bg={donate.bg}
                color={donate.color}
                w={{
                  sm: "110px",
                  md: "110px",
                  lg: "125px",
                  xl: "140px",
                  "2xl": "140px",
                }}
                h={{
                  sm: "38px",
                  md: "38px",
                  lg: "42px",
                  xl: "47px",
                  "2xl": "47px",
                }}
                mr={{
                  sm: "25px",
                  md: "25px",
                  lg: "25px",
                  xl: "50px",
                  "2xl": "50px",
                }}
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
                _active={{
                  bg: donate.hoverBg,
                  color: donate.hoverColor,
                  border: `2px solid ${donate.hoverBorder}`,
                }}
                _focusVisible={{
                  boxShadow: "none",
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
          alignItems="center"
          mb="84px"
          mt="50px"
          className="thematic-areas"
        >
          {partners.map((partner, index) => {
            return (
              <Image
                key={index}
                src={partner.img}
                alt="partner"
                w={{
                  sm: partner.width.sm,
                  md: partner.width.md,
                  lg: partner.width.lg,
                  xl: partner.width.xl,
                  "2xl": partner.width.xL,
                }}
                h={{
                  sm: partner.height.sm,
                  md: partner.height.md,
                  lg: partner.height.lg,
                  xl: partner.height.xl,
                  "2xl": partner.height.xL,
                }}
                m="auto"
              />
            );
          })}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ShowcaseContent;
