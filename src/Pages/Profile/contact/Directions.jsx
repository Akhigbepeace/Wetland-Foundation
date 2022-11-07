import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
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
    <Box>
      <Box>
        <Heading
          fontFamily="Manrope"
          fontSize="36px"
          fontWeight="300"
          color="#2C4E2A"
          mb="36px"
        >
          Visit Us
        </Heading>

        <Box w="569px" h="415px">
          <iframe
            title="Wetland Culture"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="yes"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=569&amp;height=415&amp;hl=en&amp;q=2%20Ahmed%20Onibudo%20street%20Lagos+(2%20Ahmed%20Onibudo%20street,%20off%20Adeola%20Hopewell,%20Victoria%20Island%20Lagos.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Box>

        <Box w="569px">
          <Text
            fontFamily="Mulish"
            fontSize="22px"
            fontWeight="500"
          >
            2 Ahmed Onibudo street, off Adeola Hopewell, Victoria Island Lagos.
          </Text>
          <Heading
            fontFamily="Mulish"
            fontSize="28px"
            fontWeight="700"
          >
            +234 703 144 7139
          </Heading>
          <Heading
            fontFamily="Mulish"
            fontSize="28px"
            fontWeight="700"
          >
            info@wetland.ng
          </Heading>
        </Box>
      </Box>

      <Box mt="115px">
        <Heading
          color="#2C4E2A"
          fontFamily="Manrope"
          fontSize="36px"
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
                w="188px"
                h="162px"
                cursor="pointer"
                onClick={() => new JsFileDownloader({ url: download.fileUrl })}
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
