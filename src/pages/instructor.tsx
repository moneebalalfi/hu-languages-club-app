import FormsTabs from "@/components/Form/Instructor/FormsTabs";
import { Box, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Instructor = () => {
  return (
    <>
      <Head>
        <title>Instructor Portal</title>
      </Head>
      <Flex h={{ base: "100%", lg: "calc(100vh - 10vh)" }}>
        <Flex
          rounded={"4px"}
          flexDir={{ base: "column", lg: "row" }}
          justifyContent="center"
          p={{ base: 8, lg: 26 }}
          w="100%">
          <Box>
            <Image
              src="/images/instructor.jpg"
              alt="Hola"
              h={{ base: "auto", lg: "100%" }}
            />
          </Box>
          <Box flex={"60%"}>
            <FormsTabs />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Instructor;
