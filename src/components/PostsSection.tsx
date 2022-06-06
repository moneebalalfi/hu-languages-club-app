import { useAuth } from "@/hooks/useAuth";
import { TLevel } from "@/types";
import { Box } from "@chakra-ui/react";
import React from "react";
import { fetchPosts, fetchPostsOfLevel } from "services/firestore";
import useSWR from "swr";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";

const PostsSection = () => {
  const { user, currentUserData } = useAuth();
  const { data: allPosts } = useSWR("GET_POSTS", fetchPosts);
  const { data: postsOfLevel } = useSWR("GET_POSTS_OF_LEVEL", () =>
    fetchPostsOfLevel(currentUserData?.level as TLevel),
  );

  return (
    <Box
      className="hulc-club-dashboard__posts__section"
      order={{ base: 1, lg: 0 }}
      rounded={12}
      width={{ base: "100%", lg: "70%" }}
      px={{ base: 6, lg: 12 }}
      py={{ base: 4, lg: 8 }}
      maxH={{ lg: "100vh" }}
      overflowY="auto">
      <CreatePost />
      {allPosts?.length == 0 || postsOfLevel?.length == 0 ? null : (
        <PostsList data={!user ? allPosts : postsOfLevel} />
      )}
    </Box>
  );
};

export default PostsSection;
