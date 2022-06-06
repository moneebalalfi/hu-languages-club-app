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
import { deleteVideo } from "services/firestore";
import AddVideoForm from "../Form/AddVideoForm";
import VideoPreview from "../VideoPreview";

interface VideosOfInstructorProps {
  videos: DocumentData[] | undefined;
}

const VideosOfInstructor: FC<VideosOfInstructorProps> = ({ videos }) => {
  const { onToggle, isOpen, onClose } = useDisclosure();
  return (
    <Container
      maxW="container.xl"
      display="flex"
      justifyContent="space-between">
      <Box display="flex" flexWrap="wrap" w="80%">
        {videos?.map((video) => (
          <VideoPreview key={video.id} video={video} width="500px">
            <Button
              mt={2}
              alignSelf="flex-end"
              variant="outline"
              colorScheme="red"
              size="sm"
              onClick={() => deleteVideo(video.id)}>
              Remove
            </Button>
          </VideoPreview>
        ))}
      </Box>
      <Button onClick={onToggle} variant="outline" colorScheme="linkedin">
        Add Video
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader fontSize="2xl" textDecoration="underline" m="auto">
            Add Video
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddVideoForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default VideosOfInstructor;
