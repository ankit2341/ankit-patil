import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavBar } from "src/features/components/NavBar";
import { motion } from "framer-motion";

const Contact = () => {
  const [isActive, setIsActive] = useState(true);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 800);
  }, []);

  if (isActive) {
    return (
      <Box
        width={"100%"}
        height={"100vh"}
        bg={"black"}
        className="down-enter-active"
      ></Box>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
    </motion.div>
  );
};

export default Contact;
