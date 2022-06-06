import { UseToastOptions } from "@chakra-ui/react";

const youHaveToLogin: UseToastOptions = {
  title: "You Need To Login First",
  description: "Please login to access this feature!",
  status: "warning",
  duration: 5000,
  isClosable: true,
  position: "top",
};

const welcomeBack = (userName: string): UseToastOptions => {
  return {
    title: `Welcome back, ${userName}!`,
    status: "success",
    isClosable: true,
    duration: 4000,
    position: "top",
  };
};

export { youHaveToLogin, welcomeBack };
