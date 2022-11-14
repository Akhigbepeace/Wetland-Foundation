import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const settings = {
  dots: true,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = React.useState(null);

  const top = useBreakpointValue({ base: "90%", md: "50%", sm: "40%" });
  const side = useBreakpointValue({ base: "30%", md: "10px", sm: "4%" });

  const cards = [
    {
      pic: "https://res.cloudinary.com/wavecrest1/image/upload/v1666796520/wetland/aboutgallery4_dbn9dt.png",
      heading: "Wetland Cultural and Education Foundation",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      buttonText: "Learn More",
    },
    {
      pic: "https://res.cloudinary.com/wavecrest1/image/upload/v1666796520/wetland/aboutgallery4_dbn9dt.png",
      heading: "Wetland Cultural and Education Foundation",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      buttonText: "Learn More",
    },
    {
      pic: "https://res.cloudinary.com/wavecrest1/image/upload/v1666796520/wetland/aboutgallery4_dbn9dt.png",
      heading: "Wetland Cultural and Education Foundation",
      text: "We foster partnerships,implement and manage social innovative projects focused on human ",
      buttonText: "Learn More",
    },
  ];

  const navigate = useNavigate();

  const learnMore = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <Box position={"relative"} overflow={"hidden"}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        bg="none"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        _hover={{
          bg: "none",
        }}
        onClick={() => slider?.slickPrev()}
      >
        <TfiAngleLeft size="30px" color="#FFF" />
      </IconButton>

      <IconButton
        bg="none"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        _hover={{
          bg: "none",
        }}
        onClick={() => slider?.slickNext()}
      >
        <TfiAngleRight size="30px" color="#FFF" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((data, index) => {
          return (
            <Box
              key={index}
              h={{
                xl: "500px",
                "2xl": "500px",
              }}
              bg="#2C4E2A"
            >
              <Flex
                flexDirection={{
                  sm: "column-reverse",
                  md: "column-reverse",
                  lg: "column-reverse",
                  xl: "row",
                  "2xl": "row",
                }}
                mr="30px"
                justifyContent="space-between"
                h="100%"
                m="auto"
                w={{
                  "2xl": "1300px",
                }}
              >
                <Box
                  m="auto"
                  maxW={{
                    xl: "600px",
                    "2xl": "600px",
                  }}
                  textAlign={{
                    sm: "center",
                    md: "center",
                    lg: "center",
                    xl: "left",
                    "2xl": "left",
                  }}
                  p={{
                    sm: "30px 20px",
                    md: "30px 20px",
                    lg: "30px 20px",
                    xl: "0",
                    "2xl": "0",
                  }}
                >
                  <Heading
                    fontFamily="Mulish"
                    fontWeight="800"
                    fontSize="30px"
                    color="#FFF"
                    mb="24px"
                  >
                    {data.heading}
                  </Heading>
                  <Text
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="25px"
                    lineHeight="40px"
                    mb="50px"
                    color="#FFF"
                    textAlign={{
                      sm: "center",
                      md: "center",
                      lg: "center",
                      xl: "left",
                      "2xl": "left",
                    }}
                  >
                    {data.text}
                  </Text>
                  <Button
                    w="206px"
                    borderRadius="2px"
                    h="68px"
                    bg="#FFF"
                    fontFamily="Manrope"
                    fontWeight="400"
                    fontSize="25px"
                    onClick={() => learnMore()}
                  >
                    {data.buttonText}
                  </Button>
                </Box>

                <Image src={data.pic} alt="image" h="100%" />
              </Flex>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
