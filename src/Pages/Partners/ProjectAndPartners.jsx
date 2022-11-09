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

      <Box mt="90px">
        <Box bg={currentPartner.showcaseBg}>
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            m="auto"
            w={{
              "2xl": "1300px",
            }}
          >
            <Box m="auto" py="30px">
              <Image src={currentPartner.logo} w="226px" h="79px" />
              <Heading
                fontFamily="Mulish"
                fontWeight="800"
                fontSize="45px"
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
                fontSize="25px"
                lineHeight="35px"
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
          {currentPartner.projectData?.map((data, index) => {
            return (
              <Flex key={index} mb="90px">
                <Image
                  src={data.pic}
                  alt="project-image"
                  w="100%"
                  h="388px"
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
                        fontSize="26px"
                        lineHeight="30px"
                      >
                        {data.name}
                      </Heading>
                    </Flex>

                    <Text
                      my="18px"
                      fontFamily="Manrope"
                      fontSize="20px"
                      fontWeight="400"
                      lineHeight="30px"
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