import { Box, Flex } from "@chakra-ui/react";

import { NavBar } from "src/features/components/NavBar";
import { SignatureLogo } from "src/shared/icons";

export default function Home() {
  // const isMobile = useBreakpointValue({
  //   base: true,
  //   sm: false,
  //   md: false,
  //   lg: false,
  //   xl: false,
  // });

  return (
    <Box
      w="100vw"
      overflowY="hidden"
      alignItems="center"
      justifyContent="center"
      position={"absolute"}
      zIndex={1000}
    >
      <NavBar />
      <Box
        width="100%"
        height={"90vh"}
        alignItems="center"
        justifyContent="center"
        overflowY="scroll"
      >
        <Flex
          backdropFilter={"blur(15px)"}
          width={"100%"}
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <SignatureLogo width={150} height={150} />
        </Flex>
      </Box>
    </Box>
  );
}
