import {
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate("/", { replace: true });
  };

  const navLinks = [
    {
      name: "Partners",
      redirect: () => {
        navigate("/partners", { replace: true });
      },
      to: "/partners",
    },
    {
      name: "Profile",
      redirect: () => {
        navigate("/profile", { replace: true });
      },
      to: "/profile",
    },
  ];
  return (
    <Box
      display={{
        sm: "block",
        md: "block",
        lg: "block",
        xl: "none",
        "2xl": "none",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w={{
          sm: "300px",
          md: "500px",
          lg: "none",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        <Image
          src="https://res.cloudinary.com/wavecrest1/image/upload/v1666349401/wetland/logo_yx26cs.png"
          w="61px"
          h="61px"
          onClick={() => redirectToHomePage()}
          _hover={{
            cursor: "pointer",
          }}
        />
        <Box
          onClick={onOpen}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Box w="28px" h="3px" bg="#2C4E2A" />
          <Box w="28px" h="3px" bg="#2C4E2A" my="5px" />
          <Box w="28px" h="3px" bg="#2C4E2A" />
        </Box>
      </Flex>
      <Box h="3px" w="100%" bg="#2C4E2A"></Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInRight"
        isCentered
      >
        <ModalOverlay bg="none" />

        <ModalContent
          bg="#BDE3AB"
          p="0"
          h="100%"
          margin="auto"
          mr="0"
          borderRadius="0"
          marginBottom="0"
          w={{
            sm: "75%",
            md: "345px",
          }}
        >
          <ModalCloseButton
            bg="#2C4E2A"
            color="white"
            _hover={{
              bg: "#142413",
            }}
          />
          <ModalBody>
            <Flex flexDir="column" mt="15vh">
              <Flex flexDirection="column" alignItems="center" mb="40px">
                {navLinks.map((navLink, index) => { 
                  return (
                    <Link
                      key={index}
                      as={NavLink}
                      to={navLink.to}
                      fontFamily="Mulish"
                      fontSize="24px"
                      fontWeight="400"
                      cursor="pointer"
                      mb="30px"
                    >
                      {navLink.name}
                    </Link>
                  );
                })}
              </Flex>

              <Button
                bg="#2C4E2A"
                textAlign="center"
                color="#FFF"
                py="13px"
                borderRadius="2px"
                fontFamily="Mulish"
                fontSize="20px"
                fontWeight="700"
                transition="all ease 0.5s"
                _hover={{
                  bg: "#142413",
                }}
              >
                Donate
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default MobileNavbar;
