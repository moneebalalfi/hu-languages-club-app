import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import Header from "./Header";

interface LayoutProps {
  pageName?: string;
}

const Layout: FC<LayoutProps> = ({ children, pageName }) => {
  const withoutHeader =
    pageName === "AdminDashboard" || pageName === "InstructorDashboard";

  return (
    <Flex direction="column" position="relative">
      {!withoutHeader && <Header />}

      {children}
    </Flex>
  );
};

export default Layout;
