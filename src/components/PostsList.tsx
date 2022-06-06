import { Box, Spinner } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";
import Post from "./Post";

interface PostsListProps {
  data: DocumentData[] | undefined;
}

const PostsList: FC<PostsListProps> = ({ data }) => {
  return (
    <Box className="hulc-club-dashboard__postsList" rounded={12} py={4}>
      {!data ? (
        <Spinner />
      ) : (
        data
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                width={{ base: "100%", lg: "90%" }}
              />
            );
          })
      )}
    </Box>
  );
};

export default PostsList;
