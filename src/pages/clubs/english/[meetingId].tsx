import Meeting from "@/components/HMS/Meeting";
import {
  selectIsConnectedToRoom,
  selectRoomStarted,
  useHMSActions,
  useHMSStore,
} from "@100mslive/hms-video-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const MeetingRoom = () => {
  const router = useRouter();
  // const { meetingId } = query;
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const isMeetingStarted = useHMSStore(selectRoomStarted);

  const hmsActions = useHMSActions();

  useEffect(() => {
    if (!isConnected && !isMeetingStarted) router.push("/clubs/english");
  }, [hmsActions, isConnected, isMeetingStarted, router]);

  useEffect(() => {
    return () => {
      hmsActions.leave();
    };
  }, [hmsActions]);

  return <>{isConnected && <Meeting />}</>;
};

export default MeetingRoom;
