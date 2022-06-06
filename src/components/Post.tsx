import { useAuth } from "@/hooks/useAuth";
import { TPost, TUser } from "@/types";
import {
  Avatar,
  Badge,
  Box,
  BoxProps,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import moment from "moment";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { AiFillLike, AiOutlineLike, AiTwotoneDelete } from "react-icons/ai";
import { FaHandPeace, FaRegHandPeace } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArticle } from "react-icons/md";
import { deletePost, onLike, onReserve } from "services/firestore";
import { youHaveToLogin } from "utils/toast-messages";
import ReadMore from "./ReadMore";

interface PostProps extends BoxProps {
  post: DocumentData | TPost;
}

const Post: FC<PostProps> = ({ post, ...rest }) => {
  const toast = useToast();
  const router = useRouter();
  const { user, currentUserData } = useAuth();
  const { colorMode } = useColorMode();
  const [isReserved, setIsReserved] = useState<boolean>(() => {
    return (
      post?.reservationList?.filter(
        (u: TUser) => u?.uid === currentUserData?.uid,
      )?.length !== 0
    );
  });

  const [isLiked, setIsLiked] = useState<boolean>(() => {
    return (
      post?.likes?.filter((u: TUser) => u?.uid === currentUserData?.uid)
        ?.length !== 0
    );
  });

  const handleReservationToggle = async () => {
    if (!user) {
      toast(youHaveToLogin);
      return;
    }

    if (isReserved) {
      await onReserve(
        post.id,
        currentUserData,
        post?.reservationList,
        post?.room,
        true,
      );
      setIsReserved(() => false);
    } else {
      if (post?.reservationList?.length >= 6) {
        toast({
          title: `Sorry but the ...`,
          description: "Maximum number of participants reached!",
          status: "info",
          duration: 4000,
          position: "top",
        });

        return;
      }
      await onReserve(
        post.id,
        currentUserData,
        post?.reservationList,
        post?.room,
      );
      setIsReserved((prev) => !prev);
    }
  };

  const handleLikeToggle = async () => {
    if (!user) {
      toast(youHaveToLogin);
      return;
    }

    if (isLiked) {
      await onLike(post.id, currentUserData, post?.likes, true);
      setIsLiked(() => false);
    } else {
      await onLike(post.id, currentUserData, post?.likes);
      setIsLiked((prev) => !prev);
    }
  };

  return (
    <Box
      pos="relative"
      className="hulc-club-dashboard__postsList__post"
      display="flex"
      flexDir="column"
      mx="auto"
      bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
      mb={4}
      key={post.id}
      p={4}
      rounded={12}
      {...rest}>
      <Flex
        className="hulc-club-dashboard__postsList__post__header"
        justifyContent="space-between"
        alignItems="center"
        mb={4}>
        <HStack>
          <Avatar src={post.userImage} />
          <Text>{post.userName}</Text>
        </HStack>
        <Badge colorScheme="blue">
          {moment(post.createdAt.toDate()).fromNow()}
        </Badge>
      </Flex>
      {currentUserData?.displayName === post.userName && (
        <Menu>
          <MenuButton
            pos="absolute"
            top="4px"
            right="4px"
            h="20px"
            as={IconButton}
            aria-label="Options"
            icon={<HiDotsHorizontal fontSize={"30px"} />}
            variant="unstyled"
          />
          <MenuList>
            {!(router.asPath === "/profile") && (
              <NextLink href="/profile">
                <MenuItem icon={<MdArticle />}>See all your posts</MenuItem>
              </NextLink>
            )}
            <MenuItem
              onClick={() => deletePost(post.id)}
              icon={<AiTwotoneDelete />}>
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      )}
      <ReadMore text={post.text} />

      {post.image && (
        <Box mt={4}>
          <Image
            className="nextImage"
            src={post.image}
            alt="Post Image"
            width="100%"
            height="100%"
          />
        </Box>
      )}

      {post.userType === "instructor" && post?.room ? (
        <HStack
          mt={2}
          py={2}
          cursor="pointer"
          spacing={"8px"}
          alignSelf="end"
          onClick={handleReservationToggle}>
          <Icon as={isReserved ? FaHandPeace : FaRegHandPeace} w={5} h={5} />
          <Text>
            <Text as="span" color="red.500" fontWeight={"bold"}>
              {post?.reservationList?.length}
            </Text>
            /6
          </Text>
        </HStack>
      ) : (
        <HStack
          mt={2}
          py={2}
          cursor="pointer"
          spacing={"15px"}
          alignSelf="end"
          onClick={handleLikeToggle}>
          <Icon as={isLiked ? AiFillLike : AiOutlineLike} w={5} h={5} />

          <Text as="span" color="blue.600" fontWeight={"bold"}>
            {post?.likes?.length}
          </Text>
        </HStack>
      )}
    </Box>
  );
};

export default Post;
