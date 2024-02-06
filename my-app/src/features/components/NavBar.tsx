import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  const isMobile = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  return (
    <>
      <Flex
        px="5"
        width="100%"
        height="10vh"
        position="fixed"
        top="0"
        zIndex={1000}
        left="0"
        right="0"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="left"
          width="49%"
          height="100%"
        >
          <Text
            className="title_text"
            fontWeight="bold"
            color={"gray"}
            textAlign="center"
            fontSize="x-large"
          >
            <span style={{ color: "black" }}>A</span>nkit{" "}
            <span style={{ color: "black" }}>P</span>atil
          </Text>
        </Box>
        {!isMobile && (
          <Flex width="49%" alignItems="center" justifyContent="space-between">
            {[
              "Home",
              "About",
              "Resume",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((el) => {
              return (
                <Box
                  key={el}
                  cursor="pointer"
                  p={3}
                  onClick={() =>
                    router.push(`/${el === "Home" ? "" : el.toLowerCase()}`)
                  }
                >
                  <Text key={el} fontSize="large">
                    {el}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        )}
      </Flex>
      <Box width="100%" height="10vh"></Box>
    </>
  );
};
