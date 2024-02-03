import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ScreenLayoutProps {
  children: ReactNode;
}

export const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  return (
    <Box className="area">
      {children}
      <UnorderedList filter={"blur(10px)"} className="circles">
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </UnorderedList>
    </Box>
  );
};
