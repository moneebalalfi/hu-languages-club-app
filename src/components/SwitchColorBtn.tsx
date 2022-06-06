import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const SwitchColorBtn = () => {
  const { toggleColorMode } = useColorMode();
  const ModeIcon = useColorModeValue(MdDarkMode, MdLightMode);
  const bgColor = useColorModeValue("#2b2d3b", "#FFF");
  return (
    <IconButton
      icon={<ModeIcon fontSize="40px" color={bgColor} />}
      size="sm"
      bg="transparent"
      _hover={{ bg: "transparent" }}
      aria-label="color-mode"
      onClick={toggleColorMode}
    />
  );
};

export default SwitchColorBtn;
