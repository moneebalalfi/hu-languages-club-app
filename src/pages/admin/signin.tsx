import AdminLoginForm from "@/components/Admin/AdminLoginForm";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const AdminSigninPage = () => {
  return (
    <>
      <Head>
        <title>HULC - Management Control </title>
      </Head>
      <Flex
        className="page__content"
        direction={"column"}
        align="center"
        height={"100vh"}
        flexDir="column"
        justify={"center"}>
        <Box
          className="auth-box"
          borderRadius={"lg"}
          minW={{ base: "95%", md: "620px" }}
          border="1px solid"
          borderColor={"gray.200"}
          py={10}
          px={10}>
          <Heading as="h1" mb={4} alignSelf="start">
            HULC Management Control
          </Heading>
          <Box className="auth-box__header">
            <Text fontSize="3xl" fontWeight={"bold"}>
              {" "}
              Login{" "}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.500">
              Fill out the form below to login
            </Text>
          </Box>

          <Divider my={4} />

          <AdminLoginForm />
        </Box>
      </Flex>
    </>
  );
};

AdminSigninPage.displayName = "AdminDashboard";

export default AdminSigninPage;
