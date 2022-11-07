import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const FAQs = () => {
  const FAQs = [
    {
      question: "How can I support?",
      answer: "You can support by donating.",
    },
    {
      question: "Can I give monthly donation?",
      answer: "Yes, you can. We'll gladly accept it",
    },
    {
      question: "Is supporting this cause tax-deductible?",
      answer: "Yes and No in some cases",
    },
    {
      question: "How can I support?",
      answer: "You can support by donating.",
    },
    {
      question: "Can I give monthly donation?",
      answer: "Yes, you can. We'll gladly accept it",
    },
    {
      question: "Is supporting this cause tax-deductible?",
      answer: "Yes and No in some cases",
    },
  ];

  return (
    <Box bg="#BDE3AB" py="80px">
      <Box
        w={{
          sm: "300px",
          md: "500px",
          lg: "750px",
          xl: "1200px",
          "2xl": "1300px",
        }}
        mx="auto"
      >
        <Heading fontFamily="Mulish" fontWeight="800" fontSize="30px">
          FAQs
        </Heading>
        {FAQs.map((faq, index) => {
          return (
            <Accordion key={index} allowToggle mt="30px">
              <AccordionItem border="none">
                {({ isExpanded }) => (
                  <Box>
                    <h2>
                      <AccordionButton
                        bg="#FFF"
                        p="20px 40px"
                        transition="all ease 0.5d"
                        _hover={{
                          opacity: "0.9",
                        }}
                        _expanded={{
                          bg: "#142413",
                          color: "#BDE3AB",
                        }}
                      >
                        <Box
                          flex="1"
                          fontFamily="Manrope"
                          fontWeight="400"
                          fontSize="25px"
                          textAlign="left"
                        >
                          {faq.question}
                        </Box>
                        {isExpanded ? (
                          <FaChevronCircleUp size="30px" color="#BDE3AB" />
                        ) : (
                          <FaChevronCircleDown size="30px" color="#2C4E2A" />
                        )}
                      </AccordionButton>
                    </h2>

                    <AccordionPanel
                      ml="50px"
                      fontFamily="Manrope"
                      fontWeight="400"
                      fontSize="20px"
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </Box>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default FAQs;
