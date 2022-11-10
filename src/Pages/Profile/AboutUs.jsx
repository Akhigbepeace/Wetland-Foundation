import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import JsFileDownloader from "js-file-downloader";

const AboutUs = () => {
  const fileUrl = "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf";

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
        fontSize={{
          sm: "30px",
          md: "30px",
          lg: "40px",
          xl: "60px",
          "2xl": "60px",
        }}
        fontWeight="800"
        color="#2C4E2A"
      >
        WETLAND CULTURAL AND EDUCATION FOUNDATION
      </Heading>
      <Text
        my="65px"
        fontFamily="Manrope"
        fontSize={{
          sm: "20px",
          md: "25px",
          lg: "25px",
          xl: "32px",
          "2xl": "32px",
        }}
        fontWeight="400"
        textAlign="left"
      >
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
        w={{
          sm: "135px",
          md: "135px",
          lg: "240px",
          xl: "246px",
          "2xl": "325px",
        }}
        textAlign="center"
        color="#FFF"
        h={{
          sm: "38px",
          md: "38px",
          lg: "50px",
          xl: "55px",
          "2xl": "68px",
        }}
        borderRadius="2px"
        fontFamily="Poppins"
        fontSize={{
          sm: "12px",
          md: "17px",
          lg: "20px",
          xl: "24px",
          "2xl": "24px",
        }}
        fontWeight="700"
        transition="all ease 0.5s"
        onClick={() => new JsFileDownloader({ url: fileUrl })}
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
