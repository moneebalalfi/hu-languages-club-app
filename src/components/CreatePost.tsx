/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { db, storage } from "@/config/firebase";
import { useAuth } from "@/hooks/useAuth";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Image,
  Input,
  Select,
  Spinner,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdCancelPresentation } from "react-icons/md";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { BsImage } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";
import { fetchRoomsOfInstructor } from "services/firestore";
import useSWR, { mutate } from "swr";
import { youHaveToLogin } from "utils/toast-messages";
import * as Yup from "yup";

const CreatePost = () => {
  const { data: roomsOfInstructor } = useSWR("GET_ROOMS_OF_INSTRUCTOR", () =>
    fetchRoomsOfInstructor(currentUserData),
  );
  const { user, currentUserData } = useAuth();
  const toast = useToast();
  const { colorMode } = useColorMode();
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
    null,
  );

  type FormInputs = {
    text: string;
    room?: any;
  };

  const formValidationSchema = Yup.object({
    text: Yup.string().required().label("Post text"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmit = async (data: FormInputs) => {
    const { text, room } = data;

    if (!user) {
      toast(youHaveToLogin);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        text,
        postLevel: currentUserData?.level,
        userId: currentUserData?.uid,
        userType: currentUserData?.userType,
        userName: user?.displayName,
        userImage: user?.photoURL,
        room: room ? room : null,
        createdAt: serverTimestamp(),
        reservationList: [],
        likes: [],
      });
      await updateDoc(doc(db, "posts", docRef.id), {
        id: docRef.id,
      });
      setSelectedFile(null);
      reset();
      mutate("GET_POSTS");
      mutate("GET_POSTS_OF_LEVEL");

      const fileRef = ref(storage, `posts/${docRef.id}/image`);

      if (selectedFile) {
        await uploadString(fileRef, selectedFile as string, "data_url");
        const downloadUrl = await getDownloadURL(fileRef);
        updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
        setSelectedFile(null);
        reset();
        mutate("GET_POSTS");
        mutate("GET_POSTS_OF_LEVEL");
      }
    } catch (err: any) {
      console.log("Error creating post", err.message);
    }
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const setSelectedImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target!.result);
    };
  };
  return (
    <Box
      bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
      className="hulc-club-dashboard__createPostBox"
      rounded={12}>
      <Stack
        as="form"
        className="form"
        px={8}
        py={4}
        onSubmit={handleSubmit(onSubmit)}
        spacing={4}>
        <FormControl isInvalid={!!errors.text} isRequired>
          <Textarea
            placeholder={
              !currentUserData
                ? "Log in to post!"
                : `What's on your mind ${currentUserData?.displayName} ? `
            }
            autoComplete="text"
            {...register("text")}
          />
          <FormErrorMessage>{errors.text?.message}</FormErrorMessage>
        </FormControl>

        <Box as="span" alignSelf="end">
          <Icon
            as={BsImage}
            fontSize="4xl"
            color="blue.500"
            cursor="pointer"
            onClick={() => fileRef.current?.click()}
          />
          <Input type="file" ref={fileRef} hidden onChange={setSelectedImage} />
        </Box>

        {currentUserData?.userType === "instructor" && (
          <FormControl
            isInvalid={!!errors?.room}
            w={{ base: "100%", lg: "70%" }}>
            <FormLabel htmlFor="room">
              Link this post to one of your rooms:{" "}
              <Text
                as="span"
                fontWeight={"normal"}
                color="orange.500"
                fontSize="14px">
                (Optional)
              </Text>
            </FormLabel>

            <Select id="room" {...register("room")} placeholder="Choose room">
              {!roomsOfInstructor ? (
                <Spinner />
              ) : (
                roomsOfInstructor.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))
              )}
            </Select>
            <FormErrorMessage>{errors.room?.message}</FormErrorMessage>
          </FormControl>
        )}
        {selectedFile && (
          <Box pos="relative" w={{ base: "100%", lg: "70%" }}>
            <Icon
              as={MdCancelPresentation}
              position="absolute"
              right="4px"
              cursor={"pointer"}
              onClick={() => setSelectedFile(null)}
              bg="blue.900"
              color="whitesmoke"
              top="4px"
              w={8}
              h={8}
            />
            <Image
              src={selectedFile as string}
              alt="Image"
              w={"100%"}
              m="auto"
              rounded={6}
            />
          </Box>
        )}
        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="blue"
          w={{ base: "100%", lg: "20%" }}
          alignSelf="end"
          aria-label="Create Post"
          loadingText="Creating ...">
          Create <Icon ml={2} as={IoCreate} w={6} h={6} />
        </Button>
      </Stack>
    </Box>
  );
};

export default CreatePost;
