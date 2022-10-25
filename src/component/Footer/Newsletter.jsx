import { Box, Button, Heading, Input, Stack, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
  };

  const [inputField, setInputField] = useState(initialValues);

  const inputValues = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const form = useRef();
  const toast = useToast();

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_djq4ick",
      "template_kjrcopwh",
      form.current,
      "JPAG_ZJVlAcuO_5D-"
    );
    setInputField(initialValues);
    if (res.status === 200 || res.text === "OK") {
      toast({
        title: "SUCCESSFUL !",
        description: "Your request has been submitted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const subscribeForm = [
    {
      fieldType: "text",
      name: "user_name",
      placeHolder: "Name",
    },
    {
      fieldType: "email",
      name: "user_email",
      placeHolder: "Email",
    },
  ];

  return (
    <Box w="416px">
      <Heading
        fontFamily="Mulish"
        fontWeight="800"
        fontSize="48px"
        color="white"
        lineHeight="54px"
        mb="28px"
      >
        Sign Up for Our Newsletter
      </Heading>

      <form ref={form} onSubmit={sendEmail}>
        <Stack>
          {subscribeForm.map((field, index) => {
            return (
              <Input
                isRequired
                key={index}
                type={field.fieldType}
                variant={field.variant}
                placeholder={field.placeHolder}
                name={field.name}
                value={inputField[field.name]}
                border="2px solid white"
                mt="23px"
                h="85px"
                onChange={inputValues}
                focusBorderColor="#FFF"
                _placeholder={{
                  color: "#FFF",
                  fontFamily: "Mulish",
                  fontWeight: "400",
                  fontSize: "20px",
                }}
              />
            );
          })}
        </Stack>

        <Button
          type="submit"
          bg="#FFF"
          color="#2C4E2A"
          w="207px"
          borderRadius="5px"
          fontFamily="Mulish"
          fontWeight="400"
          fontSize="28px"
          h="65px"
          mt="20px"
        >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default Newsletter;
