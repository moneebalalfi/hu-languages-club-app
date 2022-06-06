import { useAuth } from "@/hooks/useAuth";
import { TLevel } from "@/types";
import { useHMSActions } from "@100mslive/hms-video-react";
import { Box, Button, Flex, Spinner, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { fetchAllRooms, fetchRoomsOfLevel } from "services/firestore";
import useSWR from "swr";
import { TUser } from "types";
import { youHaveToLogin } from "../utils/toast-messages";
import RoomPreview from "./RoomPreview";

const RoomsSection: FC = ({}) => {
  const { user, currentUserData } = useAuth();

  const { data: roomsOfLevel } = useSWR("GET_ROOMS_OF_LEVEL", () =>
    fetchRoomsOfLevel(currentUserData?.level as TLevel),
  );
  const { push } = useRouter();
  const hmsActions = useHMSActions();
  const toast = useToast();

  const { data: AllRooms } = useSWR("GET_ALL_ROOMS", fetchAllRooms);

  const handleJoinRoom = (room: any, displayName: string) => {
    const { meetId, token } = room;

    hmsActions.join({
      userName: displayName,
      authToken: token,
      metaData: JSON.stringify({
        type: currentUserData?.userType,
        photoUrl: currentUserData?.photoUrl,
      }),
    });

    push(`/clubs/english/${meetId}?roomname=${room.name}`);
  };

  const renderRooms = () => {
    if (AllRooms?.length == 0 || roomsOfLevel?.length == 0)
      return (
        <Text fontWeight="bold" mt={10}>
          No rooms availabe at this moment!
        </Text>
      );

    if (!user)
      return AllRooms?.map((room) => {
        return (
          <RoomPreview
            minW={{ base: "270px", lg: "100%" }}
            key={room.id}
            room={room}>
            <Button
              size="sm"
              colorScheme="blue"
              mt={4}
              onClick={() => toast(youHaveToLogin)}>
              Join Room
            </Button>
          </RoomPreview>
        );
      });

    if (!roomsOfLevel) return <Spinner />;

    return roomsOfLevel.map((room) => {
      let isUserInReservationList = false;
      if (
        !(
          room?.people?.filter(
            (user: TUser) => user?.uid === currentUserData?.uid,
          )?.lenght === 0
        )
      ) {
        isUserInReservationList = true;
      }

      return (
        <RoomPreview
          minW={{ base: "270px", lg: "100%" }}
          key={room.id}
          room={room}>
          <Button
            {...(room?.people?.length >= 6 &&
              !isUserInReservationList && { disabled: true })}
            size="sm"
            colorScheme="blue"
            mt={4}
            onClick={() =>
              handleJoinRoom(room, user.displayName ? user.displayName : "")
            }>
            {room?.people?.length >= 6 && !isUserInReservationList
              ? "Reserved"
              : "Join Room"}
          </Button>
        </RoomPreview>
      );
    });
  };

  return (
    <Box
      as="aside"
      overflowY={{ base: "unset", lg: "auto" }}
      className="hulc-club-dashboard__rooms_section"
      maxH={{ lg: "100vh" }}
      width={{ base: "100%", lg: "30%" }}
      p={6}
      scrollBehavior="smooth"
      rounded={12}>
      <Flex overflowX="auto" flexDir={{ base: "row", lg: "column" }}>
        {renderRooms()}
      </Flex>
    </Box>
  );
};

export default RoomsSection;
