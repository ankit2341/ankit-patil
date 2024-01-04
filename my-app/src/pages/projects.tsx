import { Box, Grid, GridItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Variants, motion, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Projects = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const { scrollYProgress } = useScroll();
 

  useEffect(() => {
    if (router.pathname === "/projects") {
      // Show the overlay when the route changes
      setIsVisible(true);

      // Hide the overlay after animation completes
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Duration of your animation in milliseconds

      return () => clearTimeout(timeout);
    }
  }, [router.pathname]);

  return (
    <>
      {isVisible ? (
        <motion.div
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{
            scaleX: [0, 1, 0],
            transformOrigin: ["left", "left", "right"], // Change transformOrigin for each keyframe
            transition: { duration: 1, ease: "linear" },
          }}
          style={{
            backgroundColor: "#9452ff",
            height: "100vh",
          }}
        ></motion.div>
      ) : (
        <VStack>
            
        </VStack>
      )}
    </>
  );
};

export default Projects;
