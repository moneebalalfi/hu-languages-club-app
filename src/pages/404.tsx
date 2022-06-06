import { Flex, Box, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();
  return (
    <Flex
      h={{ lg: "calc(100vh - 10vh)" }}
      alignItems="center"
      justifyContent="center">
      <Box letterSpacing={2} fontSize="4xl">
        NOT FOUND
      </Box>

      <Link d="block" onClick={() => router.back()}>
        Go back!
      </Link>
    </Flex>
  );
};

export default Custom404;
