import { db } from "@/config/firebase";
import { useAuth } from "@/hooks/useAuth";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  CloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import * as Yup from "yup";

type FormInputs = {
  name: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
};

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Book name is required!"),
  description: Yup.string().required("Please provide a small description!"),
  imageUrl: Yup.string().url().required("Image URL is required!"),
  downloadUrl: Yup.string().url().required("Download Link is required!"),
});

interface AddBookFormProps {
  onClose: () => void;
}

const AddBookForm: FC<AddBookFormProps> = ({ onClose }) => {
  const { colorMode } = useColorMode();
  const { user, currentUserData } = useAuth();
  const toast = useToast();
  const [formMessage, setFormMessage] = useState("");
  const [formHasError, setFormHasError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(formValidationSchema) });

  async function onSubmit({
    name,
    description,
    imageUrl,
    downloadUrl,
  }: FormInputs) {
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

    try {
      const docRef = await addDoc(collection(db, "books"), {
        name,
        description,
        imageUrl,
        downloadUrl,
        userName: user?.displayName,
        userImage: user?.photoURL,
        userId: user?.uid,
        bookLevel: currentUserData?.level,
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, "books", docRef.id), {
        id: docRef.id,
      });
      reset();
      onClose();
      mutate("GET_BOOKS_OF_INSTRUCTOR");
      mutate("GET_BOOKS_OF_LEVEL");
      mutate("GET_ALL_BOOKS");
    } catch (err: any) {
      setFormHasError(err.message);
    }
  }

  return (
    <Stack
      as="form"
      p={4}
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

      <FormControl isInvalid={!!errors.name}>
        <FormLabel htmlFor="name">Book Name</FormLabel>
        <Input id="name" placeholder="Book Name" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.description}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          id="description"
          placeholder="Books's Description"
          {...register("description")}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.imageUrl}>
        <FormLabel htmlFor="imageUrl">Book Image URL</FormLabel>
        <Input
          id="imageUrl"
          placeholder="Book Image URL .."
          {...register("imageUrl")}
        />
        <FormErrorMessage>{errors.imageUrl?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.downloadUrl}>
        <FormLabel htmlFor="downloadUrl">Download Link</FormLabel>
        <Input
          id="downloadUrl"
          placeholder="Download Link .."
          {...register("downloadUrl")}
        />
        <FormErrorMessage>{errors.downloadUrl?.message}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        isLoading={isSubmitting}
        aria-label="Add Book"
        loadingText="Adding ...">
        Add
      </Button>
    </Stack>
  );
};

export default AddBookForm;
