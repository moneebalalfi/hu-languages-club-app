import { auth } from "@/config/firebase";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { RoughNotation } from "react-rough-notation";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FaLongArrowAltRight } from "react-icons/fa";
import * as Yup from "yup";
import { welcomeBack } from "utils/toast-messages";

const LoginForm: FC = ({}) => {
  const toast = useToast();
  const router = useRouter();

  type FormInputs = {
    studentId: string;
    password: string;
  };

  const formValidationSchema = Yup.object({
    studentId: Yup.string()
      .required()
      .matches(/^\d{7}$/, "Please check your student ID!")
      .label("Student ID"),

    password: Yup.string().required().label("Password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(formValidationSchema) });

  const onSubmit = async (data: FormInputs) => {
    const { studentId, password } = data;

    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        `${studentId}@std.hu.edu.jo`,
        // "moneebdev@gmail.com",
        password,
      );

      if (user.displayName) {
        toast(welcomeBack(user.displayName));
      }

      router.push("/");
    } catch (err: any) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 8000,
      });
    }
  };

  return (
    <Box px={{ base: 0, lg: 8 }} pt={{ base: 6, lg: 0 }}>
      <Flex flexDir={"column"} mb={6}>
        <NextLink href={"/register"} passHref>
          <Link mb={2} alignSelf="flex-end" textDecoration={"underline"}>
            Don&apos;t have an account!
          </Link>
        </NextLink>
        <Heading>
          <RoughNotation
            type="underline"
            show
            strokeWidth={3}
            color="#F6AD55"
            animationDuration={1300}>
            Log In
          </RoughNotation>
        </Heading>
      </Flex>
      <Stack
        as="form"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={4}>
        <FormControl isInvalid={!!errors.studentId}>
          <FormLabel htmlFor="studentId">Student ID</FormLabel>
          <InputGroup>
            <Input
              id="studentId"
              placeholder="Your ID"
              autoComplete="std-id"
              {...register("studentId")}
            />
            <InputRightAddon>@std.hu.edu.jo</InputRightAddon>
          </InputGroup>
          <FormErrorMessage>{errors.studentId?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>

          <Input
            id="password"
            type={"password"}
            autoComplete="user-password"
            placeholder="Your Password ..."
            {...register("password")}
          />

          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="blue"
          aria-label="log-in"
          loadingText="Logging In ...">
          <Icon mr={4} as={FaLongArrowAltRight} /> Log In
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
