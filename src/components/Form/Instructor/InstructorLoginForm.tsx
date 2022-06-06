import { auth } from "@/config/firebase";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FaLongArrowAltRight } from "react-icons/fa";
import { welcomeBack } from "utils/toast-messages";
import * as Yup from "yup";

const InstructorLoginForm = () => {
  const toast = useToast();
  const router = useRouter();

  type FormInputs = {
    email: string;
    password: string;
  };

  const formValidationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().label("Password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(formValidationSchema) });

  const onSubmit = async (data: FormInputs) => {
    const { email, password } = data;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      if (user.displayName) {
        toast(welcomeBack(user.displayName));
      }

      router.push("/");
    } catch (err: any) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 4000,
      });
    }
  };
  return (
    <Stack
      as="form"
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="Your Email ..."
          autoComplete="instructor-email"
          {...register("email")}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type={"password"}
          autoComplete="new-password"
          placeholder="Your Password ..."
          {...register("password")}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        isLoading={isSubmitting}
        colorScheme="blue"
        aria-label="Log In"
        loadingText="Logging in ...">
        <Icon mr={4} as={FaLongArrowAltRight} /> Log In
      </Button>
    </Stack>
  );
};

export default InstructorLoginForm;
