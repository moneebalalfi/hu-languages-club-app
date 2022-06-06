import { TClub } from "@/types";
import { Flex, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface ClubPreviewProps {
  club: TClub;
  isActive: boolean;
}

const ClubPreview: FC<ClubPreviewProps> = ({ club, isActive }) => {
  return (
    <Flex
      cursor={"pointer"}
      {...(!isActive && { cursor: "not-allowed" })}
      bg="whitesmoke"
      color="blue.800"
      border="4px solid"
      borderColor={"#BE5D77"}
      p={8}
      rounded="16px"
      w={{ base: "100%", lg: "300px" }}
      alignItems={"center"}
      transition="all .3s"
      transitionTimingFunction={"cubic-bezier(.35,.6,.69,.47)"}
      _hover={{
        borderWidth: "4px",
        borderColor: isActive ? "green.300" : "red.500",
      }}
      justifyContent={"space-between"}>
      <Text alignSelf={"start"} fontSize={{ base: "2xl", md: "3xl" }}>
        {club.helloWord}
      </Text>
      <Image
        src={club.image}
        width={{ base: "40px", md: "50px" }}
        height={{ base: "40px", md: "50px" }}
        alt={`${club.name} Flag`}
      />
    </Flex>
  );
};

export default ClubPreview;
