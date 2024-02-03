import { Box, Divider, Text, VStack } from "@chakra-ui/react";
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
import React from "react";
import Marquee from "react-fast-marquee";
import { NavBar } from "src/features/components/NavBar";

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
  return (
    <>
      {" "}
      <NavBar />{" "}
      <VStack
        width="100%"
        height="90vh"
        alignItems="center"
        justifyContent="space-evenly"
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
              <Box mx={5} p={5} borderRadius={"md"} key={I}>
                <FontAwesomeIcon size="5x" icon={el.value} />
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
              <Box mx={5} p={5} borderRadius={"md"} key={I}>
                <FontAwesomeIcon size="5x" icon={el.value} />
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
              <Box mx={5} p={5} borderRadius={"md"} key={I}>
                <FontAwesomeIcon size="5x" icon={el.value} />
                <Text pt={1} textAlign="center" fontWeight="bold">
                  {el.name}
                </Text>{" "}
              </Box>
            );
          })}
        </Marquee>
        <Divider />
      </VStack>
    </>
  );
}
