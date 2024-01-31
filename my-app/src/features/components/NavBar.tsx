import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

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
    <Flex
      px="5"
      width="100%"
      height="10vh"
      position="fixed"
      top="0"
      bg="white"
      left="0"
      right="0"
      boxShadow="gray 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
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
                <Button
                 key={el}
                  py={0}
                  bg={"white"}
                  _hover={{
                    borderBottom: "3px solid",
                    borderBottomColor: "brand.font",
                  }}
                  px={1}
                  borderBottom={
                    router.pathname === `/${el.toLowerCase()}` ||
                    (router.pathname === "/" && el === "Home")
                      ? "3px solid"
                      : "none"
                  }
                  borderRadius="0"
                  borderBottomColor="brand.font"
                >
                  <Text
                    color={
                      `/${el.toLowerCase()}` === router.pathname ||
                      (router.pathname === "/" && el === "Home")
                        ? "black"
                        : "brand.font"
                    }
                    fontSize="large"
                  >
                    {el}
                  </Text>
                </Button>
             
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};
