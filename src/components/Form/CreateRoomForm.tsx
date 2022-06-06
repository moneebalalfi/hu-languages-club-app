import { db } from "@/config/firebase";
import cookie from "js-cookie";
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
import axios from "axios";
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
};

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Room name is required!"),
  description: Yup.string().required("Please provide a small description!"),
});

interface CreateRoomFormProps {
  onClose: () => void;
}

const CreateRoomForm: FC<CreateRoomFormProps> = ({ onClose }) => {
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

  async function onSubmit({ name, description }: FormInputs) {
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
      const { data: roomData } = await axios({
        url: `/api/createNewRoom`,
        method: "POST",
        data: { description },
        headers: {
          "USER-TOKEN": cookie.get("tkn") as string,
        },
      });

      const { meetId, token } = roomData;

      const docRef = await addDoc(collection(db, "meetings-rooms"), {
        name,
        description,
        meetId,
        token,
        userId: user?.uid,
        userName: user?.displayName,
        userImage: user?.photoURL,
        roomLevel: currentUserData?.level,
        people: [],
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, "meetings-rooms", docRef.id), {
        id: docRef.id,
      });
      reset();
      onClose();
      mutate("GET_ROOMS_OF_INSTRUCTOR");
      mutate("GET_ROOMS_OF_LEVEL");
      mutate("GET_ALL_ROOMS");
    } catch (err: any) {
      setFormHasError(err.message);
      console.log("Error here is: ", err.message);
    }
  }

  return (
    <Stack
      as="form"
      className="form"
      p={4}
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
        <FormLabel htmlFor="name">Room name</FormLabel>
        <Input id="name" placeholder="Name" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.description}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          id="description"
          placeholder="Subject's Description"
          {...register("description")}
        />
        <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        isLoading={isSubmitting}
        aria-label="Create Room"
        loadingText="Creating ...">
        Create
      </Button>
    </Stack>
  );
};

export default CreateRoomForm;
