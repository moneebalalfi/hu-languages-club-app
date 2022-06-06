import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const CustomSpinner = () => {
  return (
    <Flex alignItems="center" justifyContent={"center"} h="100vh">
      <Spinner color="blue.300" speed="0.65s" size="lg" />
    </Flex>
  );
};

export default CustomSpinner;
