import { auth, db } from "@/config/firebase";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Link,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RoughNotation } from "react-rough-notation";
import { TLevel, TUser } from "types";
import * as Yup from "yup";

const RegisterForm: FC = ({}) => {
  const [show, setShow] = React.useState(false);
  const handleShowPass = () => setShow(!show);

  const toast = useToast();
  const router = useRouter();

  type FormInputs = {
    studentId: "";
    fullName: "";
    password: "";
    confirmPassword: "";
    level: TLevel;
  };

  const formValidationSchema = Yup.object({
    studentId: Yup.string()
      .required()
      .matches(/^\d{7}$/, "Please use your student ID!")
      .label("Student ID"),
    fullName: Yup.string()
      .required()
      .matches(
        /^[ A-Za-z-.-]*$/,
        "Your name must be only letters, or (  - or .  )",
      )
      .min(6, "Please write your full name!")
      .label("Full Name"),

    password: Yup.string().min(8).required().label("Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password doesn't match!")
      .required("Please confirm your password!"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: yupResolver(formValidationSchema) });

  const onSubmit = async (data: FormInputs) => {
    const { studentId, password, fullName, level } = data;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        `${studentId}@std.hu.edu.jo`,
        password,
      );

      await updateProfile(user, {
        displayName: fullName,
        photoURL: `https://ui-avatars.com/api/?name=${fullName}`,
      });

      if (user) {
        const docRef = await addDoc(collection(db, "users"), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          userType: "student",
          photoUrl: user.photoURL,
          level,
          createdAt: user.metadata.creationTime,
        } as TUser);

        await updateDoc(doc(db, "users", docRef.id), {
          docId: docRef.id,
        });
      }

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    } catch (err: any) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 5000,
      });
    }
  };

  return (
    <Box px={{ base: 0, lg: 8 }} pt={{ base: 6, lg: 0 }}>
      <Flex flexDir={"column"} mb={6}>
        <NextLink href={"/login"} passHref>
          <Link mb={2} alignSelf="flex-end" textDecoration={"underline"}>
            Already have account!
          </Link>
        </NextLink>
        <Heading>
          <RoughNotation
            type="underline"
            show
            strokeWidth={3}
            color="#F6AD55"
            animationDuration={1300}>
            Get Started
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

        <FormControl isInvalid={!!errors.fullName}>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input
            id="fullName"
            placeholder="Your Full Name"
            autoComplete="full-name"
            {...register("fullName")}
          />
          <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.level}>
          <FormLabel htmlFor="level">Your Language Level</FormLabel>

          <Select id="level" {...register("level")}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </Select>
          <FormErrorMessage>{errors.level?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={show ? "text" : "password"}
              autoComplete="new-password"
              placeholder="Write a strong Password!"
              {...register("password")}
            />
            <InputRightElement>
              <IconButton
                onClick={handleShowPass}
                icon={show ? <FiEyeOff /> : <FiEye />}
                aria-label="Show Pass"
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel htmlFor="confirmPassword">Confirm your Password</FormLabel>
          <Input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Rewrite your password .."
            {...register("confirmPassword")}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          isLoading={isSubmitting}
          colorScheme="blue"
          aria-label="create-account"
          loadingText="Creating ...">
          <Icon mr={4} as={FaLongArrowAltRight} /> Create Account
        </Button>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
