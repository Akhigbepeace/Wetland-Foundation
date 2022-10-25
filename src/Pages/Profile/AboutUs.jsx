import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
// import JsFileDownloader from "js-file-downloader";

const AboutUs = () => {
  // const fileUrl = "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf";

  return (
    <Box
      textAlign="center"
      w={{
        sm: "300px",
        md: "500px",
        lg: "750px",
        xl: "1200px",
        "2xl": "1300px",
      }}
      mx="auto"
      mb="117px"
    >
      <Heading
        fontFamily="Mulish"
        fontSize="46px"
        fontWeight="800"
        color="#2C4E2A"
      >
        WETLAND CULTURAL AND EDUCATION FOUNDATION
      </Heading>
      <Text my="65px" fontFamily="Manrope" fontSize="32px" fontWeight="400">
        Wetland Cultural and Education Foundation aims to promote social,
        cultural, voluntary, and educational projects following Christian morals
        and principles. We understand the need to communicate social impact
        activities effectively, as well as the need for partnerships for
        sustainable development. Being at the service of other social projects
        and nonprofit organizations, we aim at providing the required support
        for their development and sustainability. Partnerships, programme and
        project management, monitoring and evaluation, impact assessment, and
        fundraising activities are core at this time for us.
      </Text>
      <Button
        bg="#2C4E2A"
        w="325px"
        textAlign="center"
        color="#FFF"
        h="68px"
        borderRadius="2px"
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="700"
        transition="all ease 0.5s"
        // onClick={() => new JsFileDownloader({ url: fileUrl })}
        _hover={{
          bg: "#142413",
        }}
      >
        Download Profile
      </Button>
    </Box>
  );
};

export default AboutUs;
