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
    <Box pr="65px">
      <Heading
        fontFamily="Manrope"
        fontSize="36px"
        fontWeight="700"
        color="#2C4E2A"
        mb="36px"
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
                w="600px"
                h="75px"
                border="2px solid red"
                borderColor="black"
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
