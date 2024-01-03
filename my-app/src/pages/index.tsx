import { Box, Flex, VStack } from "@chakra-ui/react";

import { useEffect } from "react";

export default function Home() {
  interface Elements {
    text1: HTMLElement | null;
    text2: HTMLElement | null;
  }

  useEffect(() => {
    let elts: Elements;

    if (typeof document !== "undefined") {
      elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2"),
      };
    } else {
      elts = {
        text1: null,
        text2: null,
      };
    }

    const texts: string[] = ["Ankit", "Patil", "Portfolio", "Coming", "Soon"];

    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationFrameId: number | undefined;

    if (elts.text1 && elts.text2) {
      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
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
      if (elts.text2) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }

      fraction = 1 - fraction;
      if (elts.text1) {
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
      }

      if (elts.text2) {
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
      }
    }

    function doCooldown() {
      morph = 0;

      if (elts.text2) {
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
      }

      if (elts.text1) {
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
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

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      border="1px solid"
    >
      <VStack>
        <Box id="container">
          <span color="#9452ff" id="text1"></span>
          <span color="#9452ff" id="text2"></span>
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
      </VStack>
    </Flex>
  );
}
