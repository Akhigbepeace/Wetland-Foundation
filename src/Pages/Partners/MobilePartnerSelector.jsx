import { Box, Text, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PROJECT_NAMES, PROJECTS_TO_NAME_OBJ } from "data/partners";

const MobilePartnerSelector = () => {
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
    const firstPartnerName = partnerNames[2];

    setCurrentPartner(partnerMap[firstPartnerName]);
  };
  useEffect(() => {
    setProjectDetails(firstProjectName);
  }, [firstProjectName]);
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
      <Box>
        <Text
          fontFamily="Mulish"
          fontWeight="700"
          fontSize="16px"
          color="#2C4E2A"
        >
          Projects
        </Text>
        <Select borderColor="#2C4E2A">
          {PROJECT_NAMES.map((projectName, index) => {
            return (
              <option
                key={index}
                value={projectName}
                onClick={() => setProjectDetails(projectName)}
              >
                {projectName}
              </option>
            );
          })}
        </Select>
      </Box>

      <Box>
        <Text
          fontFamily="Mulish"
          fontWeight="700"
          fontSize="16px"
          color="#2C4E2A"
        >
          Partner
        </Text>

        <Select borderColor="#2C4E2A">
          {currentPartnerNames.map((partnerName, index) => {
            return (
              <option key={index} value={partnerName}>
                {partnerName}
              </option>
            );
          })}
        </Select>
      </Box>
    </Box>
  );
};

export default MobilePartnerSelector;
