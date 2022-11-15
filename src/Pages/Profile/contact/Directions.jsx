import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import JsFileDownloader from "js-file-downloader";
import image from "assets/image.png";

const Directions = () => {
  const donwloads = [
    {
      pic: image,
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      pic: image,
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      pic: image,
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      pic: image,
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      pic: image,
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
    {
      pic: image,
      fileUrl: "/documents/CERTIFICATE IN HOSPITALITY OPERATIONS.pdf",
    },
  ];
  return (
    <Box
      bg={{
        sm: "#FFF",
        md: "#FFF",
        lg: "#FFF",
        xl: "#BDE3AB",
        "2xl": "#BDE3AB",
      }}
      pb="168px"
      pt={{
        sm: "51px",
        md: "51px",
        lg: "51px",
        xl: "0",
        "2xl": "0",
      }}
      px={{
        sm: "31px",
        md: "41px",
        lg: "51px",
        xl: "0",
        "2xl": "0",
      }}
      pl={{
        xl: "65px",
        "2xl": "65px",
      }}
    >
      <Box>
        <Heading
          fontFamily="Manrope"
          fontSize="36px"
          fontWeight="300"
          color="#2C4E2A"
          mb="36px"
          textAlign="center"
        >
          Visit Us
        </Heading>

        <Box
          w={{
            sm: "100%",
            md: "100%",
            lg: "569px",
            xl: "569px",
            "2xl": "569px",
          }}
          h="415px"
        >
          <iframe
            title="Wetland Cultural And Educational Foundation"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="yes"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=569&amp;height=415&amp;hl=en&amp;q=2%20Ahmed%20Onibudo%20street%20Lagos+(2%20Ahmed%20Onibudo%20street,%20off%20Adeola%20Hopewell,%20Victoria%20Island%20Lagos.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Box>

        <Box
          w={{
            sm: "100%",
            md: "100%",
            lg: "569px",
            xl: "569px",
            "2xl": "569px",
          }}
        >
          <Text
            fontFamily="Mulish"
            fontSize="22px"
            fontWeight="500"
            textAlign={{
              sm: "center",
              md: "center",
              lg: "center",
              xl: "left",
              "2xl": "left",
            }}
          >
            2 Ahmed Onibudo street, off Adeola Hopewell, Victoria Island Lagos.
          </Text>

          <Flex
            flexDirection="column"
            alignItems={{
              sm: "center",
              md: "center",
              lg: "center",
              xl: "flex-start",
              "2xl": "flex-start",
            }}
            mt={{
              sm: "60px",
              md: "60px",
              lg: "60px",
              xl: "0",
              "2xl": "0",
            }}
          >
            <Heading
              fontFamily="Mulish"
              fontSize={{
                sm: "25px",
                md: "25px",
                lg: "25px",
                xl: "28px",
                "2xl": "28px",
              }}
              fontWeight="700"
            >
              +234 703 144 7139
            </Heading>
            <Heading fontFamily="Mulish" fontSize="28px" fontWeight="700">
              info@wetland.ng
            </Heading>
          </Flex>
        </Box>
      </Box>

      <Box mt="115px">
        <Heading
          color="#2C4E2A"
          fontFamily="Manrope"
          fontSize={{
            sm: "22px",
            md: "25px",
            lg: "30px",
            xl: "36px",
            "2xl": "36px",
          }}
          textAlign={{
            sm: "center",
            md: "center",
            lg: "center",
            xl: "left",
            "2xl": "left",
          }}
          fontWeight="700"
        >
          DOWNLOADS
        </Heading>
        <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="18px" mt="21px">
          {donwloads.map((download, index) => {
            return (
              <Image
                key={index}
                src={download.pic}
                w={{
                  sm: "94px",
                  md: "100px",
                  lg: "150px",
                  xl: "188px",
                  "2xl": "188px",
                }}
                h={{
                  sm: "64px",
                  md: "84px",
                  lg: "100px",
                  xl: "162px",
                  "2xl": "162px",
                }}
                cursor="pointer"
                onClick={() => new JsFileDownloader({ url: download.fileUrl })}
                objectFit="cover"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 0.5s ease",
                }}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Directions;
