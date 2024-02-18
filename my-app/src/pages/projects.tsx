import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { NavBar } from "src/features/components/NavBar";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isActive, setIsActive] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: true,
    xl: false,
  });

  const isTablet = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: false,
  });

  const projects = [
    {
      title: "E-camp",
      timetaken: "3 weeks",
      techstack: {
        frontend: [
          "React Js",
          "React Bootstrap",
          "Redux",
          "Redux persist",
          "@Google/Oauth",
        ],
        backend: ["Node Js", "Express", "MongoDB"],
      },
      features: [
        "Login & Signup",
        "Camp search",
        "pagination",
        "Book camp",
        "Signin with Google",
        "Admin panel",
      ],
    },
    {
      title: "Sugar Cosmetics Clone",
      timetaken: "2 weeks",
      techstack: {
        frontend: ["React Js", "React Bootstrap", "Context API", "Firebase"],
      },
      features: [
        "Login & Signup",
        "Camp search",
        "pagination",
        "Book camp",
        "Signin with Google",
        "Admin panel",
      ],
    },
    {
      title: "E-camp",
      timetaken: "3 weeks",
      techstack: {
        frontend: [
          "React Js",
          "React Bootstrap",
          "Redux",
          "Redux persist",
          "@Google/Oauth",
        ],
        backend: ["Node Js", "Express", "MongoDB"],
      },
      features: [
        "Login & Signup",
        "Camp search",
        "pagination",
        "Book camp",
        "Signin with Google",
        "Admin panel",
      ],
    },
    {
      title: "E-camp",
      timetaken: "3 weeks",
      techstack: {
        frontend: [
          "React Js",
          "React Bootstrap",
          "Redux",
          "Redux persist",
          "@Google/Oauth",
        ],
        backend: ["Node Js", "Express", "MongoDB"],
      },
      features: [
        "Login & Signup",
        "Camp search",
        "pagination",
        "Book camp",
        "Signin with Google",
        "Admin panel",
      ],
    },
    {
      title: "E-camp",
      timetaken: "3 weeks",
      techstack: {
        frontend: [
          "React Js",
          "React Bootstrap",
          "Redux",
          "Redux persist",
          "@Google/Oauth",
        ],
        backend: ["Node Js", "Express", "MongoDB"],
      },
      features: [
        "Login & Signup",
        "Camp search",
        "pagination",
        "Book camp",
        "Signin with Google",
        "Admin panel",
      ],
    },
  ];

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
  }, [animate]);

  const handleNext = () => {
    if (startIndex + 3 < projects.length) {
      setAnimate(true);
      setTimeout(() => {
        setStartIndex(startIndex + 1);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setAnimate(true);
      setTimeout(() => {
        setStartIndex(startIndex - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 800);
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (isActive) {
    return (
      <Box
        bg={"black"}
        width={"100%"}
        height="100vh"
        className="slots-enter-active"
      ></Box>
    );
  }
  return (
    <Box minW="100vw" maxW="100vh">
      <NavBar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Flex width="100%" height={"80vh"} align="center" justify={"center"}>
          <Button
            onClick={() => {
              handlePrev();
            }}
            zIndex={1000}
            p={4}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="xl" />
          </Button>
          {projects
            .slice(startIndex, startIndex + (isTablet ? 2 : isMobile ? 1 : 3))
            .map((project, index) => {
              return (
                <Card
                  mx={2}
                  className={animate ? "circle-out-center" : ""}
                  boxShadow={"lg"}
                  bg="white"
                  zIndex={100}
                  key={index}
                  height={"100%"}
                  width={"100%"}
                >
                  <CardBody>
                    <Image
                      src="https://camo.githubusercontent.com/5074837f5288bc8a5cfa2ddd3443854d6ad79b2287995a85e2975a7086cf7e64/68747470733a2f2f692e706f7374696d672e63632f4d486867584a6e702f6563616d70312e6a7067"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3" width="100%">
                      <Heading size="md">
                        {project.title} ({project.timetaken}){" "}
                        <Badge
                          px={1}
                          mb={1}
                          textTransform="capitalize"
                          bg="brand.primary"
                          color="white"
                        >
                          Individual
                        </Badge>
                      </Heading>
                      <Divider />
                      <Heading size="sm">Tech Stack</Heading>
                      <Text>
                        {project.techstack.frontend.map((el) => {
                          return `${el}, `;
                        })}
                        {project?.techstack?.backend?.map((el) => {
                          return `${el}, `;
                        })}
                      </Text>
                      <Divider />
                      <Heading size="sm">Features</Heading>
                      <Text>
                        {project.features.map((el) => {
                          return `${el}, `;
                        })}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2" cursor="pointer">
                      <Button
                        cursor="pointer"
                        variant="solid"
                        bg={"brand.primary"}
                        _hover={{
                          bg: "white",
                          borderColor: "brand.primary",
                          borderWidth: "1px",
                          color: "brand.primary",
                        }}
                        color="white"
                      >
                        <FontAwesomeIcon icon={faGithub} fill="white" />
                        <Text pl={3}>Github</Text>
                      </Button>
                      <Button
                        _hover={{
                          bg: "white",
                          borderColor: "brand.primary",
                          borderWidth: "1px",
                          color: "brand.primary",
                        }}
                        cursor="pointer"
                        bg={"brand.primary"}
                        color="white"
                      >
                        <FontAwesomeIcon icon={faGlobe} fill="white" />
                        <Text pl={3}>Deployed</Text>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}

          <Button
            zIndex={1000}
            p={4}
            onClick={() => {
              handleNext();
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size="xl" />
          </Button>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Projects;
