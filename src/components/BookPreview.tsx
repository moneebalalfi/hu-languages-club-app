import {
  Box,
  useColorMode,
  Text,
  BoxProps,
  Flex,
  Image,
  HStack,
  Button,
  Link,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";

interface BookPreviewProps extends BoxProps {
  book: DocumentData;
}

const BookPreview: FC<BookPreviewProps> = ({ book, children, ...rest }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      pr={4}
      pt={4}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      rounded={12}
      bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
      m={2}
      {...rest}>
      <Flex height="100%">
        <Image src={book.imageUrl} alt={`${book.name} Image`} width={200} />
        <Flex flexDir="column" justifyContent="space-between" w="100%">
          <Box ml={2}>
            <Text fontWeight="bold" fontSize="18px">
              {book.name}
            </Text>
            <Text mt={2} maxH="90px" minH="90px" overflowY="auto">
              {book.description}
            </Text>
          </Box>

          <HStack px={4} pb={2} ml="auto">
            <Button
              as={Link}
              variant="outline"
              colorScheme="yellow"
              size="sm"
              href={book.downloadUrl}>
              Download
            </Button>
            {children}
          </HStack>
        </Flex>
      </Flex>
      <Divider my={2} />
      <Flex justifyContent="space-between">
        <Badge colorScheme="blue">Recommended By {book.userName}</Badge>
        <Badge colorScheme="purple">Level {book.bookLevel}</Badge>
      </Flex>
    </Box>
  );
};

export default BookPreview;
