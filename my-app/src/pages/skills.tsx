import {
  Box,
  Divider,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  faAws,
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faJira,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { NavBar } from "src/features/components/NavBar";
import { motion } from "framer-motion";

export default function Skills() {
  const frontendIcons = [
    {
      name: "React",
      value: faReact,
    },
    {
      name: "Javascript",
      value: faJsSquare,
    },
    {
      name: "CSS",
      value: faCss3,
    },
    {
      name: "HTML",
      value: faHtml5,
    },
    {
      name: "Chakra Ui",
      value: faBolt,
    },
    {
      name: "BootStrap",
      value: faBootstrap,
    },
  ];

  const backendIcons = [
    {
      name: "NodeJs",
      value: faNodeJs,
    },
    {
      name: "Java",
      value: faJava,
    },
  ];
  const toolsIcons = [
    {
      name: "Github",
      value: faGithub,
    },
    {
      name: "AWS",
      value: faAws,
    },
    {
      name: "Jira",
      value: faJira,
    },
  ];
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: true,
    xl: false,
  });

  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 1100);
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (isActive) {
    return (
      <Box
        width={"100%"}
        height={"100vh"}
        bg={"black"}
        className="chevron-enter-active"
      ></Box>
    );
  }

  return (
    <>
      <NavBar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <VStack
          width="100%"
          height="90vh"
          alignItems="center"
          justifyContent={isMobile ? "space-around" : "space-evenly"}
        >
          <Divider colorScheme="blackAlpha" />
          <Text
            width="100%"
            px={"5"}
            textAlign="center"
            fontSize="x-large"
            fontWeight="bolder"
          >
            Frontend Skills
          </Text>{" "}
          <Marquee autoFill>
            {frontendIcons?.map((el, I) => {
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDir={"column"}
                  mx={isMobile ? 2 : 5}
                  p={5}
                  borderRadius={"md"}
                  key={I}
                >
                  <FontAwesomeIcon
                    size={isMobile ? "3x" : "4x"}
                    icon={el.value}
                  />
                  <Text pt={1} textAlign="center" fontWeight="bold">
                    {el.name}
                  </Text>{" "}
                </Box>
              );
            })}
          </Marquee>
          <Divider />
          <Text
            width="100%"
            px={"5"}
            textAlign="center"
            fontSize="x-large"
            fontWeight="bolder"
          >
            Backend Skills
          </Text>{" "}
          <Marquee autoFill direction="right">
            {backendIcons?.map((el, I) => {
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDir={"column"}
                  mx={isMobile ? 2 : 5}
                  p={5}
                  borderRadius={"md"}
                  key={I}
                >
                  <FontAwesomeIcon
                    size={isMobile ? "3x" : "4x"}
                    icon={el.value}
                  />
                  <Text pt={1} textAlign="center" fontWeight="bold">
                    {el.name}
                  </Text>{" "}
                </Box>
              );
            })}
          </Marquee>
          <Divider />
          <Text
            width="100%"
            px={"5"}
            textAlign="center"
            fontSize="x-large"
            fontWeight="bolder"
          >
            Tools
          </Text>{" "}
          <Marquee autoFill>
            {toolsIcons?.map((el, I) => {
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDir={"column"}
                  mx={isMobile ? 2 : 5}
                  p={5}
                  borderRadius={"md"}
                  key={I}
                >
                  <FontAwesomeIcon
                    size={isMobile ? "3x" : "4x"}
                    icon={el.value}
                  />
                  <Text pt={1} textAlign="center" fontWeight="bold">
                    {el.name}
                  </Text>{" "}
                </Box>
              );
            })}
          </Marquee>
          <Divider />
        </VStack>
      </motion.div>
    </>
  );
}
