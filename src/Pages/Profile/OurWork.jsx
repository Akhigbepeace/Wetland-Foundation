import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";

const OurWork = () => {
  const whatWeDo = [
    {
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666722943/wetland/corporate_n4u6gz.png",
      title: "Corporate Communication",
    },
    {
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666722959/wetland/programmes_jzey4q.png",
      title: "Programmes Management",
    },
    {
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666722943/wetland/fund_iutrxp.png",
      title: "Project Fundraising",
    },
    {
      image:
        "https://res.cloudinary.com/wavecrest1/image/upload/v1666722943/wetland/governance_eeuddy.png",
      title: "Governance & Compliance",
    },
  ];
  return (
    <Box>
      <Heading
        fontFamily="Mulish"
        fontWeight="800"
        fontSize={{
          sm: "30px",
          md: "30px",
          lg: "40px",
          xl: "60px",
          "2xl": "60px",
        }}
        textAlign="center"
        color="#2C4E2A"
        mt="100px"
      >
        WHAT WE DO
      </Heading>

      <Grid
        mt="40px"
        mb="100px"
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
        gridTemplateColumns={{
          md: "1fr 1fr",
          lg: "1fr 1fr",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(4, 1fr)",
        }}
      >
        {whatWeDo.map((item, index) => {
          return (
            <Flex
              key={index}
              flexDirection="column"
              alignItems="center"
              mb={{
                sm: "25px",
                md: "25px",
                lg: "30px",
                xl: "0",
                "2xl": "0",
              }}
            >
              <Image src={item.image} alt="works" w="80px" h="80px" />
              <Heading
                fontFamily="Manrope"
                fontSize={{
                  sm: "25px",
                  md: "25px",
                  lg: "30px",
                  xl: "34px",
                  "2xl": "34px",
                }}
                fontWeight="600"
                color="#2C4E2A"
                textAlign="center"
                mt="9px"
              >
                {item.title}
              </Heading>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurWork;
