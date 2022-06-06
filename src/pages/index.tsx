import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Link as ReactScroll } from "react-scroll";
import { featuresList } from "utils";
import Footer from "../components/Footer";

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>HU Languages Club</title>
        <meta property="og:image" content="/logos/hulc-logo.png" />
        <meta property="og:title" content="HU Languages Club" />
        <meta
          name="keywords"
          content="hulc, languages, english, practice, hulcapp, hashemite university, hashemite university languages club"
        />
        <meta
          property="og:description"
          content="Learn, get connected, meet & make smart friends, and be ready to speak your new language from the first day"
        />
      </Head>
      <Box
        as="section"
        className="hero"
        id="header-alt"
        mt={{ base: 6, md: 0 }}
        pb={{ base: 18, lg: 14 }}
        minH={300}>
        <Container
          maxW="6xl"
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}>
          <Box className="hero__text" maxW={{ lg: "50%" }}>
            <Text display={{ base: "none", md: "flex" }}>
              HU Languages Club
            </Text>
            <Heading
              color={colorMode === "dark" ? "gray.200" : "blue.700"}
              fontSize="5xl">
              Learn a new language in just no time!
            </Heading>
            <Text
              mt={6}
              fontSize="xl"
              color={colorMode === "dark" ? "gray.300" : "gray.500"}>
              Learn, get connected, meet &amp; make smart friends, and be ready
              to speak your new language from the first day 🎉
            </Text>
            <ButtonGroup mt={6} spacing={4}>
              <Button size="lg" colorScheme="blue">
                <NextLink href={"/clubs"}>Access Language Clubs!</NextLink>
              </Button>
              <Button
                size="lg"
                variant="outline"
                d={{ base: "none", lg: "flex" }}>
                <ReactScroll to="about-us" smooth href="/">
                  About Us
                </ReactScroll>
              </Button>
            </ButtonGroup>
          </Box>
          <Box className="hero__illustration" paddingLeft={{ lg: 10 }}>
            <Image
              src="/images/connect.svg"
              width="600px"
              height="600px"
              alt="home-svg"
            />
          </Box>
        </Container>
      </Box>

      <Box as="section" className="features" mt={10}>
        <Container maxW="6xl">
          <Heading
            as="h2"
            textAlign="center"
            maxW={{ lg: "70%" }}
            marginX="auto"
            lineHeight="1.5"
            color={colorMode === "dark" ? "gray.200" : "blue.700"}>
            <Text as="span" color="blue.800">
              <RoughNotation
                type="highlight"
                show
                color="#90cdf4"
                animationDuration={1200}>
                HULC believes that
              </RoughNotation>
            </Text>{" "}
            the learning process should not be just effective!
            <Text ml={2} as="span">
              <RoughNotation
                type="underline"
                multiline
                show
                color="#F6AD55"
                strokeWidth={2}
                animationDuration={2200}>
                but also fun and entertaining!
              </RoughNotation>
            </Text>
          </Heading>

          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 5, lg: 10 }}
            width="100%"
            mt={20}>
            {featuresList.map((feat) => (
              <Stack
                key={feat.id}
                className="feature__box"
                justifyContent="center"
                alignItems="center"
                backgroundColor={feat.bg}
                paddingY={14}
                paddingX={6}
                border="1px solid"
                borderColor="gray.400"
                borderRadius="md"
                transition="all .25s ease"
                _hover={{ transform: "scale(1.04)" }}>
                <Box className="feature__box__icon" opacity={0.75}>
                  <Image
                    src={feat.iconSrc}
                    width="48px"
                    height="48px"
                    alt="feat-icon"
                  />
                </Box>
                <Text
                  className="feature__box__text"
                  textAlign="center"
                  fontWeight="bold"
                  color="gray.800">
                  {feat.text}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box
        as="section"
        id="about-us"
        className="aboutUs"
        mt={20}
        bg="blue.50"
        paddingY={6}>
        <Container maxW="6xl">
          <Heading as="h2" color="gray.800">
            About Us
          </Heading>
          <Divider
            mt="3px"
            maxW="200px"
            borderWidth="4px"
            borderColor="blue.400"
            transform="translateY(-10px)"
          />
          <Flex
            alignItems="center"
            flexDirection={{ base: "column", md: "row" }}>
            <Box className="aboutUs__text" maxW={{ lg: "60%" }}>
              <Text fontSize="3xl" fontWeight="600" color="gray.800">
                We are proudly a small but effective development team studying
                at
                <NextLink
                  href="https://hu.edu.jo/en/facnew/?unitid=67000000"
                  passHref>
                  <ChakraLink
                    isExternal
                    color="blue.700"
                    fontWeight="900"
                    ml={2}>
                    The Faculty of Prince Al-Hussein Bin Abdallah II of IT
                  </ChakraLink>
                </NextLink>{" "}
                in{" "}
                <NextLink href="https://hu.edu.jo/en" passHref>
                  <ChakraLink isExternal color="blue.700" fontWeight="bold">
                    The Hashemite University!
                  </ChakraLink>
                </NextLink>{" "}
              </Text>
              <Text mt={4} color="gray.500" fontSize="lg" lineHeight="1.7">
                We love and admire our major, especially when we are talking
                about web development. Working as a freelancer for small firms
                and individual people, with 5 years of experience and we keep
                learning day by day! We done this project under the graduation
                purposes, but also is our way to say thanks to our great college
                and lovely professors.
              </Text>
            </Box>
            <Box className="aboutUs__illustration" paddingLeft={{ lg: 10 }}>
              <Image
                src="/images/developer.svg"
                width="600px"
                height="600px"
                alt="home-svg"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
