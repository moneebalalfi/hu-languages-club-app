import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

interface SubmitButtonProps {
  label: string;
  dirty: boolean;
  isValid: boolean;
  isSubmitting: boolean;
  hover?: boolean;
}
const SubmitButton: FC<SubmitButtonProps> = ({
  label,
  dirty,
  isValid,
  isSubmitting,
  hover = true,
}) => {
  return (
    <Button
      mt={6}
      type="submit"
      bg="white"
      color="blue.900"
      letterSpacing="1px"
      fontSize={20}
      fontWeight="bold"
      transition="all .4s ease"
      _hover={{
        bg: hover ? "blue.900" : "white",
        color: hover ? "white" : "blue.900",
        _disabled: {
          bg: "white",
          color: "blue.900",
        },
      }}
      isLoading={isSubmitting}
      w="100%"
      isDisabled={!dirty || !isValid}>
      {label}
    </Button>
  );
};

export default SubmitButton;
