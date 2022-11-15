import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Form = () => {
  const fields = ["Fullname", "Phone Number", "Email", "Subject"];
  return (
    <Box
      pr={{
        xl: "65px",
        "2xl": "65px",
      }}
      bg="#BDE3AB"
      px={{
        sm: "31px",
        md: "41px",
        lg: "51px",
        xl: "0",
        "2xl": "0",
      }}
      pb={{
        sm: "66px",
        md: "66px",
        lg: "66px",
        xl: "168px",
        "2xl": "168px",
      }}
    >
      <Heading
        fontFamily="Manrope"
        fontSize="36px"
        fontWeight="700"
        color="#2C4E2A"
        mb="36px"
        display={{
          sm: "none",
          md: "none",
          lg: "none",
          xl: "block",
          "2xl": "block",
        }}
      >
        Send Us a Message
      </Heading>

      <form>
        {fields.map((field, index) => {
          return (
            <Box key={index}>
              <FormLabel
                fontFamily="Mulish"
                fontWeight="500"
                fontSize="28px"
                color="#2C4E2A"
                mb="3px"
              >
                {field}
              </FormLabel>
              <Input
                placeholder={field}
                w={{
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "600px",
                  "2xl": "600px",
                }}
                h="75px"
                border="2px solid red"
                borderColor="#2C4E2A"
                mb="40px"
                focusBorderColor="black"
                _placeholder={{
                  color: "#000",
                  fontFamily: "Mulish",
                  fontWeight: "400",
                  fontSize: "20px",
                }}
                _hover={{
                  borderColor: "black",
                }}
              />
            </Box>
          );
        })}
        <FormLabel
          fontFamily="Mulish"
          fontWeight="500"
          fontSize="28px"
          color="#2C4E2A"
          mb="3px"
        >
          Message
        </FormLabel>
        <Textarea
          placeholder="Message"
          h="276px"
          border="2px solid #000"
          borderRadius="5px"
          focusBorderColor="black"
          borderColor="black"
          _placeholder={{
            color: "#000",
            fontFamily: "Mulish",
            fontWeight: "400",
            fontSize: "20px",
          }}
          _hover={{
            borderColor: "black",
          }}
        />
      </form>
      <Button
        bg="#2C4E2A"
        w="207px"
        mt="40px"
        color="#fff"
        transition="all ease 0.5s"
        borderRadius="2px"
        _hover={{
          bg: "#142413",
        }}
      >
        Send
      </Button>
    </Box>
  );
};

export default Form;
