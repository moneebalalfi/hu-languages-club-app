import { auth, db } from "@/config/firebase";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBoolean,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline, IoLogIn } from "react-icons/io5";
import { TUser } from "types";
import * as Yup from "yup";

type LoginFormInputs = {
  email: string;
  password: string;
};

const formValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  password: Yup.string().required("Password is required"),
});

const AdminLoginForm: FC = ({}) => {
  const router = useRouter();
  const toast = useToast();
  const [showPassword, setShowPassword] = useBoolean(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(formValidationSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    const { email, password } = data;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      // What email should be accepted to be admin
      //TODO: To be updated/refactored

      if (user.email?.includes("moneebdev")) {
        await updateProfile(user, {
          displayName: user.email.substring(0, user.email.indexOf("@")),
          photoURL: `https://ui-avatars.com/api/?name=${user.displayName}`,
        });

        const docRef = await addDoc(collection(db, "users"), {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          userType: "admin",
          photoUrl: user.photoURL,
          createdAt: user.metadata.creationTime,
        } as TUser);

        await updateDoc(doc(db, "users", docRef.id), {
          docId: docRef.id,
        });

        router.push("/admin/dashboard");
        toast({
          title: `Welcome ${user?.displayName}`,
          status: "success",
          duration: 2000,
          position: "top",
        });
      } else {
        toast({
          title: `Sorry, You are not allowed to Access This Page!`,
          status: "warning",
          isClosable: true,
          duration: 5000,
          position: "top",
        });
      }
    } catch (err: any) {
      console.log("error admin login", err);
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 8000,
      });
    }
  };

  return (
    <VStack
      className="auth-box__form"
      as="form"
      spacing={6}
      onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="example@domain.com"
          variant="filled"
          {...register("email")}
        />
        {errors.email ? (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <InputGroup overflow={"hidden"}>
          <Input
            id="password"
            placeholder="Your Password"
            type={showPassword ? "text" : "password"}
            variant="filled"
            {...register("password")}
          />
          <InputRightElement
            transition="0.14s linear"
            transform="translate3d(100px, 0, 0)"
            _groupHover={{
              opacity: 1,
              transform: "translate3d(0, 0 ,0)",
            }}>
            <IconButton
              colorScheme={showPassword ? "red" : "green"}
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              borderRadius={"none"}
              onClick={() => setShowPassword.toggle()}
              icon={
                showPassword ? (
                  <IoEyeOffOutline fontSize={"1.25rem"} />
                ) : (
                  <IoEyeOutline fontSize={"1.25rem"} />
                )
              }
            />
          </InputRightElement>
        </InputGroup>
        {errors.password ? (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
        ) : null}
      </FormControl>
      <Button
        alignSelf={"flex-end"}
        colorScheme="blue"
        type="submit"
        aria-label="Log in"
        spinnerPlacement="end"
        rightIcon={<IoLogIn fontSize={"1.25rem"} />}
        isLoading={isSubmitting}>
        Log in
      </Button>
    </VStack>
  );
};

export default AdminLoginForm;
