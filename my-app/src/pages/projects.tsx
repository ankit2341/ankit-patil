import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

import { NavBar } from "src/features/components/NavBar";

const SimpleCard = ({ id }: { id: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      className="transition"
      w="100%"
      h="400px"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      transition="transform 0.3s ease-in-out"
      transform={"matrix(1, 0.5, -0.5, 1, 0, 0)"}
      _hover={{
        transform: `matrix(1, 0, 0, 1, 0, 0) scale(1.5) ${
          id === 4
            ? "translate(-20%, 0%)"
            : id === 0
              ? "translate(20%, 0%)"
              : ""
        }`,
        zIndex: "1000",
      }}
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text p={4}>Your Card Content</Text>
      {isHovered && (
        <Text
          p={4}
          opacity={0}
          transition="opacity 0.3s ease-in-out"
          style={{ opacity: 1 }}
        >
         opened
        </Text>
      )}
    </Box>
  );
};

const Projects = () => {
  return (
    <Box minW="100vw" maxW="100vh" overflow="hidden">
      <NavBar />
      <Flex
        px="5"
        width="100%"
        height="10vh"
        top="0"
        bg="white"
        left="0"
        right="0"
      ></Flex>

      <SimpleGrid
        p="4"
        width="100vw"
        alignItems="center"
        justifyContent="center"
        height="90vh"
        columns={[1, 3, 5]}
        spacing={10}
        overflow={"hidden"}
      >
        {[1, 2, 3, 4, 5].map((image, i) => (
          <SimpleCard key={i} id={i} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
