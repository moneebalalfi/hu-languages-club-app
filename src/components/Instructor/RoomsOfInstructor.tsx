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
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";
import { deleteRoom } from "services/firestore";
import CreateRoomForm from "../Form/CreateRoomForm";
import RoomPreview from "../RoomPreview";

interface RoomsOfInstructorProps {
  rooms: DocumentData[] | undefined;
}

const RoomsOfInstructor: FC<RoomsOfInstructorProps> = ({ rooms }) => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  if (!rooms) return <Spinner />;

  return (
    <Container
      maxW="container.xl"
      display="flex"
      justifyContent="space-between">
      <Box display="flex" flexWrap="wrap" w="80%">
        {rooms?.map((room) => (
          <RoomPreview key={room.id} room={room} width="300px" height="230px">
            <Button
              variant="outline"
              colorScheme="red"
              size="sm"
              onClick={() => deleteRoom(room.id)}>
              Remove
            </Button>
          </RoomPreview>
        ))}
      </Box>
      <Button onClick={onToggle} variant="outline" colorScheme="linkedin">
        Create Room
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader fontSize="2xl" textDecoration="underline" m="auto">
            Create Room
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateRoomForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default RoomsOfInstructor;
