import { Flex, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import ClubSideBar from "../ClubSideBar";

interface ClubLayoutProps {
  children: ReactNode;
}

function ClubLayout({ children }: ClubLayoutProps) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      {...(colorMode === "light" && { bg: "blue.50" })}
      d="flex"
      flexDir={{ base: "column", lg: "row" }}
      h={{ base: "100%", lg: "calc(100vh - 10vh)" }}
      justifyContent="space-between">
      <ClubSideBar />

      {children}
    </Flex>
  );
}

export default ClubLayout;
