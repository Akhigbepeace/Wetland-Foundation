import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "component/Search";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Partners",
      redirect: () => {
        navigate("/partners", { replace: true });
      },
    },
    {
      name: "Profile",
      redirect: () => {
        navigate("/profile", { replace: true });
      },
    },
  ];

  const redirectToHomePage = () => {
    navigate("/", { replace: true });
  };
  return (
    <Box bg="#FFF" position="sticky" top="0">
      <Flex
        pt="30px"
        justifyContent="space-between"
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        <Image
          src="https://res.cloudinary.com/wavecrest1/image/upload/v1666349401/wetland/logo_yx26cs.png"
          w="110px"
          h="101px"
          onClick={() => redirectToHomePage()}
          _hover={{
            cursor: "pointer",
          }}
        />

        <Flex alignItems="center" justifyContent="space-between">
          <Search />

          {navLinks.map((navLink, index) => {
            return (
              <Text
                key={index}
                fontFamily="Mulish"
                fontSize="24px"
                fontWeight="400"
                cursor="pointer"
                ml="87px"
                onClick={navLink.redirect}
              >
                {navLink.name}
              </Text>
            );
          })}

          <Button
            bg="#2C4E2A"
            w="154px"
            textAlign="center"
            color="#FFF"
            py="13px"
            borderRadius="2px"
            fontFamily="Mulish"
            fontSize="20px"
            fontWeight="700"
            transition="all ease 0.5s"
            ml="87px"
            _hover={{
              bg: "#142413",
            }}
          >
            Donate
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
