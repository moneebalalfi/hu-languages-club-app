import { TClub } from "@/types";
import {
  Box,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { fetchClubs } from "services/firestore";
import useSWR from "swr";
import ClubPreview from "./ClubPreview";
import NextLink from "next/link";

function ClubsList() {
  const { data, error } = useSWR("GET_CLUBS", fetchClubs);
  const toast = useToast();

  if (error) return <p>Loading failed...</p>;

  return (
    <Box
      bg="#BE5D77"
      d="flex"
      alignItems={"center"}
      justifyContent={"center"}
      p={16}
      color="whitesmoke"
      h={{ base: "100%", md: "calc(100vh - 10vh)" }}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent="center"
        w="100%">
        <Flex direction={"column"} mb={8}>
          <Heading
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight={1}
            mb={{ base: 2, lg: 4 }}
            letterSpacing={{ base: "2px", lg: "4px" }}>
            Choose Language
          </Heading>
          <Text fontSize={{ base: "20px", md: "26px" }}>
            you want to learn, and master it!
          </Text>
        </Flex>
        {!data ? (
          <Spinner />
        ) : (
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacingX={4}
            spacingY={2}
            w={{ base: "100%", sm: "80%", lg: "auto" }}>
            {data.map((club) => {
              const isActive = club.name.includes("English");

              return (
                <NextLink
                  key={club.id}
                  passHref
                  href={`${
                    !isActive
                      ? "/clubs"
                      : `/clubs/${club.name.toLocaleLowerCase()}`
                  }`}>
                  <Link
                    onClick={() =>
                      !isActive
                        ? toast({
                            title: "Sorry! this club is not ready yet!",
                            description: "We are working on it .. thanks!",
                            status: "info",
                            position: "top",
                            duration: 5000,
                            isClosable: true,
                          })
                        : null
                    }>
                    <ClubPreview club={club as TClub} isActive={isActive} />
                  </Link>
                </NextLink>
              );
            })}
            {data.length == 0 && (
              <Text fontWeight="bold">
                Sorry, there are no clubs available at this moment!
              </Text>
            )}
          </SimpleGrid>
        )}
      </Flex>
    </Box>
  );
}

export default ClubsList;
