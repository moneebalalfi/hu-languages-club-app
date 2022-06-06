import BookPreview from "@/components/BookPreview";
import ClubLayout from "@/components/Layout/ClubLayout";
import { useAuth } from "@/hooks/useAuth";
import { TLevel } from "@/types";
import { Box, BoxProps, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { fetchAllBooks, fetchBooksOfLevel } from "services/firestore";
import useSWR from "swr";

const UsefulBooks = () => {
  const { user, currentUserData } = useAuth();
  const { data: booksOfLevel } = useSWR("GET_BOOKS_OF_LEVEL", () =>
    fetchBooksOfLevel(currentUserData?.level as TLevel),
  );
  const { data: allBooks } = useSWR("GET_ALL_BOOKS", fetchAllBooks);

  const renderBooks = () => {
    const BookpreviewStyles: BoxProps = {
      width: "450px",
    };

    if (!user)
      return allBooks?.map((book) => (
        <BookPreview {...BookpreviewStyles} key={book.id} book={book} />
      ));

    if (!booksOfLevel) return <Spinner />;

    return booksOfLevel.map((book) => (
      <BookPreview key={book.id} book={book} {...BookpreviewStyles} />
    ));
  };

  return (
    <ClubLayout>
      <Box w="100%" maxH="100vh" overflow="scroll" p={2}>
        <Text p={4} fontSize="2xl">
          <Box as="span" fontWeight="bold" fontSize="28px">
            Useful and important
          </Box>{" "}
          books recommended by our instructors!
        </Text>
        <Flex flexWrap="wrap">{renderBooks()}</Flex>
      </Box>
    </ClubLayout>
  );
};

export default UsefulBooks;
