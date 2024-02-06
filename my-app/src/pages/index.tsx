import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          height={isMobile ? "45vh" : "90vh"}
          flexDir={"column"}
          alignItems="center"
          justifyContent="center"
        >
          <ReactTyped
            style={{
              fontSize: isMobile ? "30px" : "50px",
              textAlign: "center",
            }}
            loop
            strings={[
              "I am a Web Developer",
              "I am a Full Stack Engineer",
              "I am a Frontend Engineer",
              "I am a React Native Developer",
            ]}
            typeSpeed={80}
          />

          <Button
            mt={5}
            leftIcon={<FontAwesomeIcon icon={faDownload} />}
            _hover={{
              color: "brand.primary",
              bg: "white",
              border: "1px solid",
            }}
            px={10}
            py={5}
            color="white"
            bg="brand.primary"
            fontSize="larger"
          >
            Resume
          </Button>
        </Flex>
        <Flex
          width={isMobile ? "100%" : "50%"}
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          height={isMobile ? "45vh" : "90vh"}
          p={"4"}
          pb={isMobile ? "10" : "0"}
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
                  bottom="0%"
                  left={"15%"}
                  as={SignatureLogo}
                  width={isMobile ? 100 : 200}
                  height={isMobile ? 100 : 200}
                />
              ) : (
                <Icon
                  position="absolute"
                  bottom="0%"
                  as={SignatureLogo}
                  width={isMobile ? 100 : 200}
                  height={isMobile ? 100 : 200}
                />
              )}
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
