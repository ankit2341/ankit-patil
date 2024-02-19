import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faSuperpowers,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faDownload,
  faEnvelope,
  faHeadphonesSimple,
  faHouse,
  faLightbulb,
  // faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
  const isTablet = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: false,
  });

  const navElements = [
    {
      name: "Home",
      route: "/",
      icon: faHouse,
    },
    // {
    //   name: "About",
    //   route: "/about",
    //   icon: faUser,
    // },
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
    // {
    //   name: "Experience",
    //   route: "/experience",
    //   icon: faUserTie,
    // },
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
            width={isMobile ? "100%" : "39%"}
            height="100%"
          >
            {(isMobile||isTablet) && (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<FontAwesomeIcon icon={faBars} />}
                  variant="outline"
                />
                <MenuList>
                  {navElements.map((el) => {
                    return (
                      <MenuItem width="100%" key={el.name}>
                        <HStack
                          width="100%"
                          key={el.name}
                          cursor="pointer"
                          alignItems="center"
                          justifyContent="left"
                          px={3}
                          py={2}
                          borderRadius="full"
                          borderColor={
                            el.route !== router.pathname
                              ? "lightgray"
                              : "brand.primary"
                          }
                          borderWidth={
                            el.route !== router.pathname ? "2px" : "2px"
                          }
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
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            )}
            <Text
              className="title_text"
              fontWeight="bold"
              color={"gray"}
              textAlign="center"
              pl={4}
              fontSize="x-large"
            >
              <span style={{ color: "black" }}>A</span>nkit{" "}
              <span style={{ color: "black" }}>P</span>atil
            </Text>
          </Box>
          {!isMobile&&!isTablet && (
            <Flex width="59%" alignItems="center" justifyContent="right">
              {navElements.map((el) => {
                return (
                  <HStack
                    mx={2}
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
              <Menu>
                <MenuButton>
                  <HStack
                    cursor="pointer"
                    alignItems="center"
                    justifyContent="space-between"
                    px={3}
                    py={2}
                    mx={1}
                    borderRadius="full"
                    borderColor={"lightgray"}
                    borderWidth={"2px"}
                    _hover={{
                      borderColor: "brand.primary",
                      borderWidth: "2px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faHeadphonesSimple}
                      fill="brand.primary"
                    />
                    <Text color="brand.font">Contact</Text>
                  </HStack>
                </MenuButton>
                <MenuList p={3}>
                  <Link href={"https://github.com/ankit2341"} target="_blank">
                    <MenuItem>
                      <HStack>
                        <FontAwesomeIcon icon={faGithub} />
                        <Text>Github</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/ankit-patil-948036196/"}
                    target="_blank"
                  >
                    <MenuItem>
                      <HStack>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <Text>LinkedIn</Text>
                      </HStack>
                    </MenuItem>
                  </Link>
                  <MenuItem>
                    <HStack>
                      <FontAwesomeIcon icon={faEnvelope} />
                      <Text>ankitpatil2341@gmail.com</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
        </Flex>
        <Box width="100%" height="10vh"></Box>
      </>
    </>
  );
};
