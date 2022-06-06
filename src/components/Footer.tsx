import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { BsLinkedin } from "react-icons/bs";
import { Link as ReactScroll } from "react-scroll";

const Footer: FC = () => {
  return (
    <Box className="footer" borderTop="1px solid #dedede" py={6} bg="gray.50">
      <Container maxW="6xl">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}>
          <Box className="logo" mb={{ base: 4, sm: 0 }} cursor="pointer">
            <ReactScroll to="header-alt" smooth>
              <Heading
                as="h1"
                className="logo__text"
                pl={2}
                fontSize="3xl"
                color="blue.700">
                HU Languages Club
              </Heading>
            </ReactScroll>
            <Text fontSize="xs" pl={1} fontWeight="bold" color="gray.600">
              &copy; ALL RIGHTS RESERVED
            </Text>
          </Box>

          <Flex
            mt={6}
            w={{ base: "100%", md: "auto" }}
            h="60px"
            color="blue.900"
            fontWeight={"medium"}
            alignItems="center">
            <Link
              textDecoration={"underline"}
              fontSize="13px"
              href="https://www.linkedin.com/in/moneeb-alalfi-191637194/">
              <Text>
                <Icon
                  verticalAlign={"text-top"}
                  mr={1}
                  as={BsLinkedin}
                  w={4}
                  h={4}
                />
                Feel free to ask me anythink you want{" "}
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
