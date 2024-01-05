import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { NavBar } from "src/features/components/NavBar";

export default function Home() {
  interface Elements {
    text1: HTMLElement | null;
    text2: HTMLElement | null;
  }

  useEffect(() => {
    let textNodes: Elements;

    if (typeof document !== "undefined") {
      textNodes = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2"),
      };
    } else {
      textNodes = {
        text1: null,
        text2: null,
      };
    }

    const texts: string[] = [
      "Full stack developer",
      "Frontend developer",
      "Web developer",
      "React native developer",
    ];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationFrameId: number | undefined;

    if (textNodes.text1 && textNodes.text2) {
      textNodes.text1.textContent = texts[textIndex % texts.length];
      textNodes.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction: number) {
      if (textNodes.text2) {
        textNodes.text2.style.filter = `blur(${Math.min(
          8 / fraction - 8,
          100,
        )}px)`;
        textNodes.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }

      fraction = 1 - fraction;
      if (textNodes.text1) {
        textNodes.text1.style.filter = `blur(${Math.min(
          8 / fraction - 8,
          100,
        )}px)`;
        textNodes.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        textNodes.text1.textContent = texts[textIndex % texts.length];
      }

      if (textNodes.text2) {
        textNodes.text2.textContent = texts[(textIndex + 1) % texts.length];
      }
    }

    function doCooldown() {
      morph = 0;

      if (textNodes.text2) {
        textNodes.text2.style.filter = "";
        textNodes.text2.style.opacity = "100%";
      }

      if (textNodes.text1) {
        textNodes.text1.style.filter = "";
        textNodes.text1.style.opacity = "0%";
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    // Cleanup function
    return () => {
      // Stop the animation when the component is unmounted
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  return (
    <Box minW="100vw" overflow="hidden">
      <NavBar />
      <Flex
        width="100%"
        height={"100vh"}
        overflow="hidden"
        flexDir={!isMobile ? "row" : "column"}
      >
        <Center
          h={isMobile ? "50%" : "100%"}
          w={isMobile ? "100%" : "49%"}
          color="white"
        >
          <Box className="bulb-container">
            <Box className="wire" height={isMobile ? "20%" : "50%"}></Box>
            <Box className="connector">
              <Box className="grove"></Box>
              <Box className="grove"></Box>
              <Box className="grove"></Box>
            </Box>
            <Box className="bulb">
              <Box className="metal-wire"></Box>
              <Box className="metal-wire"></Box>
              <Box className="metal-wire"></Box>
            </Box>
          </Box>
        </Center>
        <Flex
          width={!isMobile ? "50%" : "100%"}
          height={isMobile ? "50%" : "100%"}
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            <Text fontSize="x-large" fontWeight="semibold">
              I am a
            </Text>
            <Box id="container">
              <Text
                color="brand.primary"
                fontSize="xxx-large"
                id="text1"
              ></Text>
              <Text
                color="brand.primary"
                fontSize="xxx-large"
                id="text2"
              ></Text>
            </Box>

            <svg id="filters">
              <defs>
                <filter id="threshold">
                  <feColorMatrix
                    in="SourceGraphic"
                    type="matrix"
                    values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
                  />
                </filter>
              </defs>
            </svg>
            <Button bg="brand.primary">Download Resume</Button>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
