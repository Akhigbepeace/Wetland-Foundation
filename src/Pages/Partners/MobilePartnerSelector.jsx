import { Box, Text, Select } from "@chakra-ui/react";
import React from "react";
import { PROJECT_NAMES } from "data/partners";

const MobilePartnerSelector = ({
  currentPartnerNames,
  setCurrentPartner,
  partnerMap,
  currentPartner,
  setProjectDetails,
}) => {
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
      <Box mt="20px">
        <Box>
          <Text
            fontFamily="Mulish"
            fontWeight="700"
            fontSize="16px"
            color="#2C4E2A"
          >
            Projects
          </Text>
          <Select
            borderColor="#2C4E2A"
            fontFamily="cursive"
            fontWeight="400"
            fontSize="20px"
            color="#2C4E2A"
            onChange={(e) => {
              const projectName = e.target.value;
              setProjectDetails(projectName);
            }}
          >
            {PROJECT_NAMES.map((projectName, index) => {
              return (
                <option
                  key={index}
                  value={projectName}
                  onClick={() => setProjectDetails(projectName)}
                  style={{
                    fontFamily: "Mulish",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
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

          <Select
            borderColor="#2C4E2A"
            fontFamily="cursive"
            fontWeight="400"
            fontSize="20px"
            color="#2C4E2A"
          >
            {currentPartnerNames.map((partnerName, index) => {
              return (
                <option
                  key={index}
                  value={partnerName}
                  defaultValue={partnerName === currentPartner.partnerName}
                  style={{
                    fontFamily: "Mulish",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  {partnerName}
                </option>
              );
            })}
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default MobilePartnerSelector;
