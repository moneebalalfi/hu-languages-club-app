import LoginForm from "@/components/Form/LoginForm";
import { Box, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Flex h={{ base: "100%", lg: "calc(100vh - 10vh)" }}>
        <Flex
          rounded={"4px"}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="center"
          p={{ base: 8, lg: 16 }}
          w="100%">
          <Box>
            <Image
              src="/images/success-metaphor.jpg"
              alt="Hola"
              h={{ base: "auto", lg: "100%" }}
            />
          </Box>
          <Box flex={"60%"}>
            <LoginForm />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
