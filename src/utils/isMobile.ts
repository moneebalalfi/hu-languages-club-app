import { useMediaQuery } from "@chakra-ui/react";

const isMobile = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isMobile] = useMediaQuery("(max-width: 1224px)");

  if (isMobile) return true;

  return false;
};

export default isMobile;
