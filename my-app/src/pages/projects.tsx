import { Box, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      {!isHovered && (
        <Box
          width="100%"
          borderRadius="lg"
          height="100%"
          className="project_card"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text pb="3" fontSize="large" color="brand.primary" fontWeight="bold">
            E-CAMP APP
          </Text>
          <FontAwesomeIcon icon={faHandPointer} bounce color="#9452ff" />
        </Box>
      )}
      {isHovered && (
        <VStack spacing={3}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width="100%"
            height="100%"
            alt="ecamp"
            src="https://camo.githubusercontent.com/5074837f5288bc8a5cfa2ddd3443854d6ad79b2287995a85e2975a7086cf7e64/68747470733a2f2f692e706f7374696d672e63632f4d486867584a6e702f6563616d70312e6a7067"
          />

          <Text p={4}>Your Card Content</Text>
          <Text
            p={4}
            opacity={0}
            transition="opacity 0.3s ease-in-out"
            style={{ opacity: 1 }}
          >
            opened
          </Text>
        </VStack>
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
