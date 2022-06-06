import { Flex, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface LikeDisLikeProps {
  icon: IconType;
  num: number;
  onLikeOrDisLike: () => void;
}

const LikeDisLike: FC<LikeDisLikeProps> = ({ icon, num, onLikeOrDisLike }) => {
  return (
    <Flex onClick={onLikeOrDisLike} alignItems="center" cursor={"pointer"}>
      <Icon as={icon} w="20px" h="20px" mr={2} /> {num}
    </Flex>
  );
};

export default LikeDisLike;
