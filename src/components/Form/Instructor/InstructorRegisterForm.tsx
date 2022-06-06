import { auth, db } from "@/config/firebase";
import { TLevel, TUser } from "@/types";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Select,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FaLongArrowAltRight } from "react-icons/fa";
import * as Yup from "yup";

const InstructorRegisterForm = () => {
  const toast = useToast();
  const router = useRouter();

  type FormInputs = {
    email: string;
    fullName: string;
    level: TLevel;
    password: string;
    confirmPassword: string;
  };

  const formValidationSchema = Yup.object({
    email: Yup.string().email().required().email().label("Email"),
    fullName: Yup.string()
      .required()
      .matches(
        /^[ A-Za-z-.'-]*$/,
        "Your name must be only letters, or (  - or . or ' )",
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
    const { email, fullName, level, password } = data;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
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
          userType: "instructor",
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
        description: "We've created your account for you!",
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
        <Input
          id="password"
          type={"password"}
          autoComplete="new-password"
          placeholder="Your Password ..."
          {...register("password")}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.confirmPassword}>
        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
        <Input
          id="confirmPassword"
          type={"password"}
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
        aria-label="Create Account"
        loadingText="Creating ...">
        <Icon mr={4} as={FaLongArrowAltRight} /> Create Account
      </Button>
    </Stack>
  );
};

export default InstructorRegisterForm;
