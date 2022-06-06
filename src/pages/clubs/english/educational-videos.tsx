import ClubLayout from "@/components/Layout/ClubLayout";
import VideoPreview from "@/components/VideoPreview";
import { useAuth } from "@/hooks/useAuth";
import { TLevel } from "@/types";
import { Box, Heading, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import { fetchAllVideos, fetchVideosOfLevel } from "services/firestore";
import useSWR from "swr";

const EducationalVideos = () => {
  const { user, currentUserData } = useAuth();
  const { data: videosOfLevel } = useSWR("GET_VIDEOS_OF_LEVEL", () =>
    fetchVideosOfLevel(currentUserData?.level as TLevel),
  );
  const { data: allVideos } = useSWR("GET_ALL_VIDEOS", fetchAllVideos);

  const renderVideos = () => {
    if (!user)
      return allVideos?.map((video) => (
        <VideoPreview key={video.id} video={video} />
      ));

    if (!videosOfLevel) return <Spinner />;

    return videosOfLevel.map((video) => (
      <VideoPreview key={video.id} video={video} />
    ));
  };

  return (
    <ClubLayout>
      <Box w="100%" maxH={{ lg: "100vh" }} overflow="auto" p={4}>
        <Heading fontFamily="Roboto" p={4} fontSize="28px">
          Some useful videos:
        </Heading>

        <VStack mt={4}>{renderVideos()}</VStack>
      </Box>
    </ClubLayout>
  );
};

export default EducationalVideos;
