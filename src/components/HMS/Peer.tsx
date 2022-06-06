import {
  HMSPeer,
  selectIsPeerVideoEnabled,
  selectPeerAudioByID,
  selectVideoTrackByPeerID,
  useHMSActions,
  useHMSStore,
} from "@100mslive/hms-video-react";
import { Avatar, Badge, Box, GridItem, Icon, Image } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { RiUserStarFill } from "react-icons/ri";

interface PeerProps {
  peer: HMSPeer;
}

function Peer({ peer }: PeerProps) {
  const videoRef = useRef(null);
  const hmsActions = useHMSActions();
  const videoTrack = useHMSStore(selectVideoTrackByPeerID(peer.id));
  const isPeerVideoEnabled = useHMSStore(selectIsPeerVideoEnabled(peer.id));

  const isSpeaking = useHMSStore(selectPeerAudioByID(peer.id)) > 0;

  useEffect(() => {
    if (videoRef.current && videoTrack) {
      if (videoTrack.enabled) {
        hmsActions.attachVideo(videoTrack.id, videoRef.current);
      } else {
        hmsActions.detachVideo(videoTrack.id, videoRef.current);
      }
    }
  }, [videoTrack, hmsActions]);

  return (
    <GridItem
      className="peer_item"
      pos="relative"
      w={{ base: "100%", lg: 300 }}
      h={300}
      rounded="15px"
      overflow={"hidden"}
      border={"5px solid "}
      {...(isSpeaking && {
        boxShadow: "4px 1px 15px 1px rgba(72,187,120,1)",
      })}
      borderColor={isSpeaking ? "green.400" : "#63B3ED"}>
      <Box
        as="video"
        objectFit={"cover"}
        w={{ base: "100%" }}
        h={300}
        ref={videoRef}
        autoPlay
        muted
        playsInline
      />

      <Image
        src={JSON.parse(peer?.metadata as string)?.photoUrl}
        display={!isPeerVideoEnabled ? "block" : "none"}
        w={{ base: "100%", lg: 300 }}
        objectFit="cover"
        h={"100%"}
        alt="user-image"
        position={"absolute"}
        left="0"
        zIndex={1000}
        top="0"
        rounded="15px"
      />

      <Badge
        zIndex={1001}
        pos="absolute"
        top={"8px"}
        right="10px"
        p={2}
        bg="blackAlpha.500"
        color="white"
        fontSize={{ base: "12px", md: "13px", lg: "14px" }}>
        {peer.isLocal ? "You" : peer.name}
      </Badge>
      <Avatar
        name={peer.name}
        pos="absolute"
        top="4px"
        left="10px"
        zIndex={1001}
      />

      {JSON.parse(peer.metadata as string).type === "instructor" && (
        <Badge
          zIndex={1001}
          pos="absolute"
          right="8px"
          bottom="10px"
          p={2}
          bg="blue.400"
          color="white"
          fontSize={{ base: "12px", md: "13px", lg: "14px" }}>
          <Icon
            as={RiUserStarFill}
            w={{ base: 4, lg: 5 }}
            h={{ base: 4, lg: 5 }}
            verticalAlign="text-bottom"
            mr={"5px"}
          />
          Instructor
        </Badge>
      )}
    </GridItem>
  );
}

export default Peer;
