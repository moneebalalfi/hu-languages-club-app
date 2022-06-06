import {
  Box,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";
import { deleteBook } from "services/firestore";
import BookPreview from "../BookPreview";
import AddBookForm from "../Form/AddBookForm";

interface BooksOfInstructorProps {
  books: DocumentData[] | undefined;
}

const BooksOfInstructor: FC<BooksOfInstructorProps> = ({ books }) => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  return (
    <Container
      maxW="container.xl"
      display="flex"
      justifyContent="space-between">
      <Box display="flex" flexWrap="wrap" w="80%">
        {books?.map((book) => (
          <BookPreview key={book.id} book={book} width="500px" h="300px">
            <Button
              variant="outline"
              colorScheme="red"
              size="sm"
              onClick={() => deleteBook(book.id)}>
              Remove
            </Button>
          </BookPreview>
        ))}
      </Box>
      <Button onClick={onToggle} variant="outline" colorScheme="linkedin">
        Add Book
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader fontSize="2xl" textDecoration="underline" m="auto">
            Add Book
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddBookForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default BooksOfInstructor;
