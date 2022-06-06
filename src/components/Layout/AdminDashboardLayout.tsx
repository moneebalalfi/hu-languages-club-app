import { Box, CircularProgress, Flex } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import Sidebar from "../Admin/Sidebar";
import { useAuth } from "@/hooks/useAuth";
import Head from "next/head";

const AdminDashboardLayout: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, currentUserData } = useAuth();

  useEffect(() => {
    const isSideBarOpenStorage = window.localStorage.getItem("isSideBarOpen");
    if (!isSideBarOpenStorage) return;

    const isSideBarOpen = parseInt(isSideBarOpenStorage);
    isSideBarOpen
      ? setIsSidebarOpen(() => true)
      : setIsSidebarOpen(() => false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isSideBarOpen", isSidebarOpen ? "1" : "0");
  }, [isSidebarOpen]);

  if (user) {
    if (!(currentUserData?.userType === "admin")) {
      <Flex alignItems="center" justifyContent={"center"} h="100vh">
        <CircularProgress isIndeterminate color="blue.300" />
      </Flex>;
    }
  } else {
    return (
      <Flex alignItems="center" justifyContent={"center"} h="100vh">
        <CircularProgress isIndeterminate color="blue.300" />
      </Flex>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <Box w="100%" d="flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <Box w="100%" overflow="hidden">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboardLayout;
