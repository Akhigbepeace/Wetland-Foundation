import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECT_NAMES, PROJECTS_TO_NAME_OBJ } from "data/partners";
import MobilePartnerSelector from "./MobilePartnerSelector";

const ProjectAndPartners = () => {
  const firstProjectName = PROJECT_NAMES[0];
  const [currentProject, setCurrentProject] = useState({});
  const [currentPartner, setCurrentPartner] = useState({});
  const [currentPartnerNames, setCurrentPartnerNames] = useState([]);
  const [partnerMap, setPartnerMap] = useState({});

  const setProjectDetails = (projectName) => {
    const currentProject = PROJECTS_TO_NAME_OBJ[projectName];
    setCurrentProject(currentProject);

    const partnerMap = {};
    const partnerNames = [];

    currentProject.content.forEach((c) => {
      partnerNames.push(c.partnerName);
      partnerMap[c.partnerName] = c;
    });

    setCurrentPartnerNames(partnerNames);
    setPartnerMap(partnerMap);
    const firstPartnerName = partnerNames[1];

    setCurrentPartner(partnerMap[firstPartnerName]);
  };
  useEffect(() => {
    setProjectDetails(firstProjectName);
  }, [firstProjectName]);

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
    <Fragment>
      <Box
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        <Flex alignItems="center" mb="30px">
          <Text
            fontFamily="Mulish"
            fontWeight="700"
            fontSize="24px"
            color="#2C4E2A"
            mr="30px"
          >
            Projects
          </Text>

          <Flex bg="#BDE3AB" borderRadius="2px" textAlign="center">
            {PROJECT_NAMES.map((projectName, index) => {
              const isActive = currentProject.projectName === projectName;

              return (
                <Box
                  key={index}
                  bg={isActive ? "#2C4E2A" : "none"}
                  color={isActive ? "#FFF" : "#000"}
                  fontFamily="Mulish"
                  fontSize="18px"
                  p="16px"
                  minW="180px"
                  cursor="pointer"
                  transition="all ease 0.5s"
                  onClick={() => setProjectDetails(projectName)}
                  _hover={{
                    bg: isActive ? "#2C4E2A" : "#AED69A",
                  }}
                >
                  {projectName}
                </Box>
              );
            })}
          </Flex>
        </Flex>

        <Flex alignItems="center">
          <Text
            fontFamily="Mulish"
            fontWeight="700"
            fontSize="24px"
            color="#2C4E2A"
            mr="30px"
          >
            Partners
          </Text>

          <Flex bg="#BDE3AB" borderRadius="2px" textAlign="center">
            {currentPartnerNames.map((partnerName, index) => {
              const showPartner = currentPartner.partnerName === partnerName;

              return (
                <Box
                  key={index}
                  bg={showPartner ? "#2C4E2A" : "none"}
                  color={showPartner ? "#FFF" : "#000"}
                  fontFamily="Mulish"
                  fontSize="18px"
                  p="16px"
                  minW="180px"
                  cursor="pointer"
                  transition="all ease 0.5s"
                  onClick={() => setCurrentPartner(partnerMap[partnerName])}
                  _hover={{
                    bg: showPartner ? "#2C4E2A" : "#AED69A",
                  }}
                >
                  {partnerName}
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>

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
        <MobilePartnerSelector
          setCurrentPartnerNames={setCurrentPartnerNames}
          currentPartnerNames={currentPartnerNames}
          setPartnerMap={setPartnerMap}
          partnerMap={partnerMap}
          currentPartner={currentPartner}
          setCurrentPartner={setCurrentPartner}
          setCurrentProject={setCurrentProject}
          setProjectDetails={setProjectDetails}
        />
      </Box>

      <Box
        mt="90px"
        display={{
          sm: "flex",
          md: "flex",
          lg: "flex",
          xl: "block",
          "2xl": "block",
        }}
        flexDirection="column"
        alignItems="center"
        textAlign={{
          sm: "center",
          md: "center",
          lg: "center",
          xl: "left",
          "2xl": "left",
        }}
      >
        <Image
          src={currentPartner.logo}
          w="138px"
          h="48px"
          mb="20px"
          display={{
            sm: "block",
            md: "block",
            lg: "block",
            xl: "none",
            "2xl": "none",
          }}
        />

        <Box bg={currentPartner.showcaseBg}>
          <Flex
            flexDirection={{
              sm: "column-reverse",
              md: "column-reverse",
              lg: "column-reverse",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent="space-between"
            m="auto"
            w={{
              "2xl": "1300px",
            }}
          >
            <Box m="auto" py="30px">
              <Image
                src={currentPartner.logo}
                w="226px"
                h="79px"
                display={{
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "block",
                  "2xl": "block",
                }}
              />
              <Heading
                fontFamily="Mulish"
                fontWeight="800"
                fontSize={{
                  sm: "22px",
                  md: "22px",
                  lg: "22px",
                  xl: "45px",
                  "2xl": "45px",
                }}
                color="#2E3493"
                mb="24px"
                mt="35px"
                textTransform="uppercase"
                maxW="700px"
              >
                {currentPartner.partnerName}
              </Heading>

              <Text
                fontFamily="Manrope"
                fontWeight="400"
                fontSize={{
                  sm: "17px",
                  md: "17px",
                  lg: "17px",
                  xl: "25px",
                  "2xl": "25px",
                }}
                mb="50px"
              >
                {currentPartner.projectDesc}
              </Text>
              <Button
                w="206px"
                borderRadius="2px"
                h="68px"
                fontFamily="Manrope"
                fontWeight="400"
                fontSize="25px"
                bg={currentPartner.redirectButttonBg}
                color={currentPartner.redirectButttonColor}
                onClick={() =>
                  navigate(currentPartner.redirectTo, { replace: true })
                }
                transition="all ease 0.5s"
                _hover={{
                  bg: "#171a54",
                }}
              >
                {currentPartner.redirectButttonText}
              </Button>
            </Box>

            <Image src={currentPartner.showcaseImg} objectFit="cover" />
          </Flex>
        </Box>

        <Box
          w={{
            sm: "300px",
            md: "500px",
            lg: "750px",
            xl: "1200px",
            "2xl": "1300px",
          }}
          m="80px auto"
        >
          <Heading
            fontFamily="Mulish"
            fontWeight="800"
            fontSize={{
              sm: "22px",
              md: "22px",
              lg: "22px",
              xl: "45px",
              "2xl": "45px",
            }}
            color="#2C4E2A"
            mb="24px"
            mt="35px"
            textTransform="uppercase"
            maxW="700px"
            display={{
              sm: "block",
              md: "block",
              lg: "block",
              xl: "none",
              "2xl": "none",
            }}
          >
            {`PROJECTS HANDLED BY ${currentPartner.partnerName}`}
          </Heading>
          {currentPartner.projectData?.map((data, index) => {
            return (
              <Flex
                key={index}
                mb="90px"
                flexDirection={{
                  sm: "column",
                  md: "column",
                  lg: "column",
                  xl: "row",
                  "2xl": "row",
                }}
              >
                <Image
                  src={data.pic}
                  alt="project-image"
                  w="100%"
                  h={{
                    sm: "234px",
                    md: "234px",
                    lg: "234px",
                    xl: "388px",
                    "2xl": "388px",
                  }}
                  objectFit="cover"
                  mr="40px"
                />

                <Flex flexDirection="column" justifyContent="space-between">
                  <Box>
                    <Flex>
                      <Image
                        src={data.schoolLogo}
                        alt="logo"
                        h="40px"
                        mr="17px"
                      />
                      <Heading
                        fontFamily="Mulish"
                        fontWeight="700"
                        fontSize={{
                          sm: "17px",
                          md: "17px",
                          lg: "17px",
                          xl: "26px",
                          "2xl": "26px",
                        }}
                      >
                        {data.name}
                      </Heading>
                    </Flex>

                    <Text
                      my="18px"
                      fontFamily="Manrope"
                      fontSize={{
                        sm: "17px",
                        md: "17px",
                        lg: "17px",
                        xl: "20px",
                        "2xl": "20px",
                      }}
                      fontWeight="400"
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

                    <Box>
                      <Heading
                        fontFamily="Mulish"
                        fontWeight="700"
                        fontSize="18px"
                        color="#2C4E2A"
                        display={{
                          sm: "none",
                          md: "none",
                          lg: "none",
                          xl: "block",
                          "2xl": "block",
                        }}
                      >
                        Project estimation
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
                            opacity: 0.9,
                          }}
                        >
                          {donate.name}
                        </Button>
                      );
                    })}
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </Box>
    </Fragment>
  );
};

export default ProjectAndPartners;
