import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { NavBar } from "src/features/components/NavBar";
import { motion } from "framer-motion";

const Projects = () => {
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
        bg={"black"}
        width={"100%"}
        height="100vh"
        className="chevron-enter-active"
      ></Box>
    );
  }
  return (
    <Box minW="100vw" maxW="100vh" overflow="hidden">
      <NavBar />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Text>Check</Text>
      </motion.div>
    </Box>
  );
};

export default Projects;
