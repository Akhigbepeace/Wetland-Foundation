import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { PROJECTS } from "data/project";
import { useNavigate } from "react-router-dom";

const ProjectDesc = () => {
  const navigate = useNavigate();

  const donates = [
    {
      bg: "#2C4E2A",
      name: "Donate",
      color: "white",
      hoverBg: "#142413",
      hoverBorder: "#142413",
      hoverColor: "#BDE3AB",
      to: () => {
        navigate("", { replace: true });
      },
    },
    {
      bg: "#FFF",
      name: "Share Project",
      hoverBg: "#EBEDEF",
      to: () => {
        navigate("/partners", { replace: true });
      },
    },
  ];

  return (
    <Box
      w={{
        sm: "300px",
        md: "500px",
        lg: "750px",
        xl: "1200px",
        "2xl": "1300px",
      }}
      mx="auto"
    >
      {PROJECTS.map((item, index) => {
        return (
          <Box key={index} my="100px">
            <Flex h="154px">
              <Box w="20px" bg={item.bg2} />

              <Box ml="30px" mt="20px">
                <Flex alignItems="center">
                  <Box
                    bg={item.bg1}
                    display="block"
                    w="50px"
                    p="10px"
                    borderRadius="5px"
                    mr="20px"
                  >
                    <Image src={item.icon} w="32px" h="32px" m="auto" />
                  </Box>

                  <Heading fontFamily="Mulish" fontWeight="800" fontSize="30px">
                    {item.title}
                  </Heading>
                </Flex>

                <Text
                  fontFamily="Manrope"
                  fontWeight="400"
                  fontSize="30px"
                  mt="12px"
                >{`Here are some projects regarding ${item.title}`}</Text>
              </Box>
            </Flex>

            <Flex>
              <Box w="2px" ml="10px" bg="rgba(201, 206, 202, 0.59)" />

              <Grid
                gridTemplateColumns="repeat(3, 1fr)"
                gridGap="30px"
                ml="40px"
              >
                {item.projectData.map((data, index) => {
                  return (
                    <Box
                      key={index}
                      maxW="435px"
                      border="2px solid rgba(201, 206, 202, 0.59)"
                    >
                      <Image
                        src={data.pic}
                        alt="project-image"
                        w="100%"
                        h="314px"
                        objectFit="cover"
                        borderRadius="2px"
                      />

                      <Box p="27px 36px 38px 36px">
                        <Flex>
                          <Image
                            src={data.logo}
                            alt="logo"
                            w="40px"
                            h="40px"
                            mr="17px"
                          />
                          <Heading
                            fontFamily="Mulish"
                            fontWeight="700"
                            fontSize="26px"
                            lineHeight="30px"
                          >
                            {data.name}
                          </Heading>
                        </Flex>

                        <Text
                          my="18px"
                          fontFamily="Manrope"
                          fontSize="15px"
                          fontWeight="400"
                          lineHeight="20px"
                          color="rgba(0, 0, 0, 0.84)"
                        >
                          {data.desc}
                        </Text>

                        <Text
                          fontFamily="Mulish"
                          fontWeight="600"
                          fontSize="18px"
                          color="rgba(0, 0, 0, 0.84)"
                          mb="4px"
                        >
                          Project Duration: {data.duration}
                        </Text>

                        <Flex alignItems="center" h="90px">
                          <Heading
                            fontFamily="Mulish"
                            fontWeight="600"
                            fontSize="18px"
                          >
                            By:
                          </Heading>

                          <Box w="130px" ml="20px">
                            <Image
                              src={data.by}
                              alt="by"
                              _hover={{
                                cursor: "pointer",
                              }}
                            />
                          </Box>
                        </Flex>

                        <Box>
                          <Heading
                            fontFamily="Mulish"
                            fontWeight="700"
                            fontSize="18px"
                            color="#2C4E2A"
                          >
                            Project Goal: {data.goal}
                          </Heading>

                          <Progress
                            mt="13px"
                            colorScheme="green"
                            size="lg"
                            value={60}
                            bg="#BDE3AB"
                            borderRadius="10px"
                          />
                        </Box>

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
                      </Box>
                    </Box>
                  );
                })}
              </Grid>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProjectDesc;
