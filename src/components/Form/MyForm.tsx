import { isMobile } from "@/utils";
import {
  Flex,
  FormErrorMessageProps,
  Heading,
  Icon,
  InputProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface MyFormProps {
  formTitle?: string;
  titleIcon?: IconType;
}

const inputStyles: InputProps = {
  transition: "all .5s ease",
  borderWidth: "2px",
  borderColor: "white",
  color: "white",
  _hover: {
    borderColor: "white",
  },
  _focus: {
    _placeholder: {
      transform: "scale(1.02)",
    },
  },
  _placeholder: {
    color: "white",
  },
  _invalid: {
    borderColor: "red.300",
    boxShadow: "none",
  },
};

const formErrorMessageStyles: FormErrorMessageProps = {
  fontWeight: "bold",
  fontSize: "15",
  color: "red.200",
};

const MyForm: FC<MyFormProps> = ({ formTitle, titleIcon, children }) => {
  return (
    <Flex
      alignItems="center"
      justify="center"
      flexDir="column"
      {...(isMobile() && { p: 4 })}
      className="form">
      <Heading
        {...(titleIcon && { d: "flex" })}
        {...(titleIcon && { alignItems: "center" })}
        className="form-title"
        color="white"
        mb={{ base: 4, lg: 2 }}>
        {formTitle && formTitle}
        {titleIcon && <Icon as={titleIcon} size="lg" />}
      </Heading>
      {children}
    </Flex>
  );
};

export { inputStyles, formErrorMessageStyles };

export default MyForm;
