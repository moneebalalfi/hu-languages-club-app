/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { db, storage } from "@/config/firebase";
import { useAuth } from "@/hooks/useAuth";

import { yupResolver } from "@hookform/resolvers/yup";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { ChangeEvent, FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { mutate } from "swr";
import * as Yup from "yup";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";

type FormInputs = {
  title: string;
  description: string;
};

const formValidationSchema = Yup.object().shape({
  title: Yup.string().required("Video title is required!"),
  description: Yup.string().required("Please provide a small description!"),
});

interface AddVideoFormProps {
  onClose: () => void;
}

const AddVideoForm: FC<AddVideoFormProps> = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const { user, currentUserData } = useAuth();
  const toast = useToast();
  const [formMessage, setFormMessage] = useState("");
  const [formHasError, setFormHasError] = useState(false);
  const videoRef = useRef<HTMLInputElement>(null);
  const [selectedVideo, updateSelectedVideo] = useState<
    string | ArrayBuffer | null
  >(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(formValidationSchema) });

  async function onSubmit({ title, description }: FormInputs) {
    console.log(title, description, selectedVideo);

    if (!user || !currentUserData) {
      toast({
        title: `Sorry! - You have to log in first!`,
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    if (!(currentUserData.userType === "instructor")) {
      toast({
        title: `Sorry! - You are not instructor!`,
        status: "info",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    if (!selectedVideo) {
      toast({
        title: `Please upload the video!`,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "videos"), {
        title,
        description,
        userName: user?.displayName,
        userImage: user?.photoURL,
        userId: user?.uid,
        videoLevel: currentUserData?.level,
        createdAt: serverTimestamp(),
      });

      const videoRef = ref(storage, `videos/${docRef.id}/video`);

      await uploadString(videoRef, selectedVideo as string, "data_url");
      const downloadUrl = await getDownloadURL(videoRef);

      await updateDoc(doc(db, "videos", docRef.id), {
        id: docRef.id,
        video: downloadUrl,
      });
      reset();
      onClose();
      toast({
        title: `The video is successfully added!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      mutate("GET_VIDEOS_OF_INSTRUCTOR");
      mutate("GET_VIDEOS_OF_LEVEL");
      mutate("GET_ALL_VIDEOS");
    } catch (err: any) {
      setFormHasError(err.message);
    }
  }

  const handleSelectedVideo = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      updateSelectedVideo(readerEvent.target!.result);
    };
  };

  return (
    <Stack
      p={4}
      as="form"
      className="form"
      maxW="container.sm"
      bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}>
      {formMessage && (
        <Alert status={formHasError ? "error" : "success"} mb={6} mt={6}>
          <AlertIcon />
          <AlertDescription>{formMessage}</AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setFormMessage("")}
          />
        </Alert>
      )}

      <FormControl isInvalid={!!errors.title}>
        <FormLabel htmlFor="title">Video Title</FormLabel>
        <Input id="title" placeholder="Video Title" {...register("title")} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.description}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          id="description"
          placeholder="Video's Description"
          {...register("description")}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      <FormControl>
        <Input
          type="file"
          id="vid"
          accept="video/mp4,video/x-m4v,video/*"
          ref={videoRef}
          onChange={handleSelectedVideo}
          hidden
        />
        <FormLabel htmlFor="vid" display="flex" alignItems="center">
          Upload video
          <Icon
            ml={2}
            cursor="pointer"
            as={BsFillCloudUploadFill}
            fontSize={20}
          />
        </FormLabel>
      </FormControl>

      {selectedVideo && (
        <video width="400" controls autoPlay>
          <source src={selectedVideo as string} />
        </video>
      )}

      <Button
        type="submit"
        isLoading={isSubmitting}
        aria-label="Add Video"
        loadingText="Adding ...">
        Add
      </Button>
    </Stack>
  );
};

export default AddVideoForm;
