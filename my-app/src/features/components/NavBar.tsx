import { Box, Flex, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { faSuperpowers } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faHeadphonesSimple,
  faHouse,
  faLightbulb,
  faUser,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  const navElements = [
    {
      name: "Home",
      route: "/",
      icon: faHouse,
    },
    {
      name: "About",
      route: "/about",
      icon: faUser,
    },
    {
      name: "Resume",
      route: "/resume",
      icon: faDownload,
    },
    {
      name: "Skills",
      route: "/skills",
      icon: faSuperpowers,
    },
    {
      name: "Projects",
      route: "/projects",
      icon: faLightbulb,
    },
    {
      name: "Experience",
      route: "/experience",
      icon: faUserTie,
    },
    {
      name: "Contact",
      route: "/contact",
      icon: faHeadphonesSimple,
    },
  ];

  return (
    <>
      <>
        <Flex
          px="5"
          width="100%"
          height="10vh"
          position="fixed"
          top="0"
          zIndex={1000}
          left="0"
          right="0"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="left"
            width="39%"
            height="100%"
          >
            <Text
              className="title_text"
              fontWeight="bold"
              color={"gray"}
              textAlign="center"
              fontSize="x-large"
            >
              <span style={{ color: "black" }}>A</span>nkit{" "}
              <span style={{ color: "black" }}>P</span>atil
            </Text>
          </Box>
          {!isMobile && (
            <Flex width="59%" alignItems="center" justifyContent="space-evenly">
              {navElements.map((el) => {
                return (
                  <HStack
                    key={el.name}
                    cursor="pointer"
                    alignItems="center"
                    justifyContent="space-between"
                    px={3}
                    py={2}
                    borderRadius="full"
                    borderColor={
                      el.route !== router.pathname
                        ? "lightgray"
                        : "brand.primary"
                    }
                    borderWidth={el.route !== router.pathname ? "2px" : "2px"}
                    onClick={() => router.push(el.route)}
                    _hover={{
                      borderColor: "brand.primary",
                      borderWidth: "2px",
                    }}
                  >
                    <FontAwesomeIcon
                      shake={el.route === "/contact"}
                      spin={el.route === "/skills"}
                      fade={el.route === "/projects"}
                      icon={el.icon}
                      fill="brand.primary"
                    />
                    <Text key={el.name} color="brand.font">
                      {el.name}
                    </Text>
                  </HStack>
                );
              })}
            </Flex>
          )}
        </Flex>
        <Box width="100%" height="10vh"></Box>
      </>
      <Flex></Flex>
    </>
  );
};
