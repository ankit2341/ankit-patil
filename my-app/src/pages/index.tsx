import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import { NavBar } from "src/features/components/NavBar";

import { SignatureLogo } from "src/shared/icons";

export default function Home() {
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

  return (
    <Box
      w="100vw"
      position={"absolute"}
      zIndex={1000}
      className="spotlight-enter-active"
    >
      <NavBar />
      <Flex
        width="100%"
        height={"auto"}
        alignItems="center"
        flexDir={isMobile ? "column" : "row"}
        justifyContent="center"
      >
        <Flex
          width={isMobile ? "100%" : "50%"}
          height={isMobile ? "35vh" : "90vh"}
          flexDir={"column"}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize={"x-large"}>I am a</Text>
          <ReactTyped
            style={{
              fontSize: isTablet ? "40px" : isMobile ? "25px" : "50px",
              textAlign: "center",
              fontWeight: "bold",
            }}
            loop
            strings={[
              "Web Developer",
              "Full Stack Engineer",
              "Frontend Engineer",
              "React Native Developer",
            ]}
            typeSpeed={80}
          />
         {<Text
            fontSize="md"
            px={isTablet ? 10 : isMobile ? 4 : 2}
            textAlign="center"
          >
            Mechanical engineer turned full-stack developer with nearly a year
            of experience, passionate about crafting innovative solutions and
            staying at the forefront of technology.
          </Text>}
          <Button
            mt={5}
            leftIcon={<FontAwesomeIcon icon={faDownload} />}
            _hover={{
              color: "brand.primary",
              bg: "white",
              border: "1px solid",
            }}
            width={isMobile ? "80%" : "50%"}
            borderRadius="full"
            px={10}
            py={6}
            color="white"
            bg="brand.primary"
            fontSize="larger"
          >
            Resume
          </Button>
          <HStack pt={4} spacing={4}>
            <Link href={"https://github.com/ankit2341"} target="_blank">
              <FontAwesomeIcon size="2xl" icon={faGithubSquare} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ankit-patil-948036196/"}
              target="_blank"
            >
              <FontAwesomeIcon size="2xl" icon={faLinkedin} />
            </Link>
          </HStack>
        </Flex>
        <Flex
          width={isMobile ? "100%" : "50%"}
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          height={isMobile ? "55vh" : "90vh"}
          p={"4"}
          pb={isMobile ? "20" : "0"}
        >
          <VStack width="100%" height="100%">
            {isMobile ? (
              <Image
                transitionDuration={"500ms"}
                filter={"drop-shadow(0 0 0.35rem #000)"}
                transition="ease-in"
                boxSize={"100%"}
                objectFit="contain"
                src="https://i.postimg.cc/JhJGkwy4/profile-sketch-cropped.jpg"
                alt="sketch"
              />
            ) : (
              <Image
                transitionDuration={"500ms"}
                boxSize="90%"
                filter={"drop-shadow(0 0 0.35rem #000)"}
                transition="ease-in"
                objectFit="contain"
                src="https://i.postimg.cc/JhJGkwy4/profile-sketch-cropped.jpg"
                alt="sketch"
              />
            )}
            <Box width="100%" height="20%">
              {isTablet ? (
                <Icon
                  position="absolute"
                  bottom="4%"
                  left={"15%"}
                  as={SignatureLogo}
                  width={150}
                  height={150}
                />
              ) : isMobile ? (
                <Icon
                  position="absolute"
                  bottom="4%"
                  as={SignatureLogo}
                  width={isMobile ? 150 : 200}
                  height={isMobile ? 150 : 200}
                />
              ) : (
                <Icon
                  position="absolute"
                  bottom="0%"
                  as={SignatureLogo}
                  width={isMobile ? 150 : 200}
                  height={isMobile ? 150 : 200}
                />
              )}
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
