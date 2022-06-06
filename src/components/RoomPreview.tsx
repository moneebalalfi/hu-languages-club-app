import { Badge, Box, BoxProps, Text, useColorMode } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import React, { FC } from "react";

interface RoomPreviewProps extends BoxProps {
  room: DocumentData;
}

const RoomPreview: FC<RoomPreviewProps> = ({ children, room, ...rest }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      p={4}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      rounded={12}
      bg={colorMode === "light" ? "white" : "whiteAlpha.200"}
      m={2}
      {...rest}>
      <Badge ml="auto" textTransform="capitalize" colorScheme="purple">
        Level {room.roomLevel}
      </Badge>
      <Box>
        <Text fontWeight="bold" fontSize="18px">
          {room.name}
        </Text>
        <Text mt={2} maxH="90px" minH="90px" overflowY="auto">
          {room.description}
        </Text>
      </Box>
      {room?.people.length > 0 && (
        <Text ml="auto" px={4}>
          <Text as="span" color="red.500" fontWeight={"bold"}>
            {room?.people?.length}
          </Text>
          /6
        </Text>
      )}

      {children}
    </Box>
  );
};

export default RoomPreview;
