import {
  Avatar,
  Badge,
  Box,
  Flex,
  FlexProps,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import moment from "moment";
import React, { FC, useRef } from "react";

interface VideoPreviewProps extends FlexProps {
  video: DocumentData;
}

const VideoPreview: FC<VideoPreviewProps> = ({ video, children, ...rest }) => {
  const { colorMode } = useColorMode();

  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => videoRef.current?.play();
  const pauseVideo = () => videoRef.current?.pause();

  const toggleVideo = () =>
    videoRef.current?.paused ? playVideo() : pauseVideo();

  return (
    <Flex
      p={2}
      rounded="10px"
      {...rest}
      onClick={() => toggleVideo()}
      flexDir={{ base: "column-reverse", lg: "row" }}
      justifyContent="space-between"
      mb={{ base: 6, lg: 4 }}
      w="100%"
      cursor={"pointer"}
      _hover={{ bg: colorMode === "light" ? "gray.200" : "whiteAlpha.200" }}
      transition="all .3s ease">
      <Box w={{ base: "100%", lg: "300px" }} mr="auto">
        <video controls width="100%" ref={videoRef}>
          <source src={video.video as string} />
        </video>
      </Box>
      <Box
        ml={{ base: 0, lg: 6 }}
        mb={{ base: 4, lg: 0 }}
        flex={{ base: "100%", lg: "60%" }}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <HStack alignItems={"start"}>
            <Avatar name={video.userName} size="sm" />
            <Text>{video.userName}</Text>
          </HStack>
          <Badge>{moment(video.createdAt.toDate()).fromNow()}</Badge>
        </Flex>
        <VStack alignItems="start">
          <Text fontWeight="bold" fontSize="20px">
            {video.title}
          </Text>
          <Text>{video.description}</Text>
          {children}
        </VStack>
      </Box>
    </Flex>
  );
};

export default VideoPreview;
