import {
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  useHMSActions,
  useHMSStore,
} from "@100mslive/hms-video-react";
import { HStack, IconButton } from "@chakra-ui/react";
import {
  BsCameraVideo,
  BsCameraVideoOff,
  BsMic,
  BsMicMute,
} from "react-icons/bs";
import { FaPhoneSlash } from "react-icons/fa";
import useSound from "use-sound";

function Controllers() {
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const hmsActions = useHMSActions();
  const [play] = useSound("/sounds/leave-meeting.mp3");

  const toggleAudio = () => {
    hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleVideo = () => {
    hmsActions.setLocalVideoEnabled(!videoEnabled);
  };

  const leaveCall = () => {
    hmsActions.leave();
    play();
  };

  window.addEventListener("beforeunload", () => hmsActions.leave());
  window.addEventListener("onunload", () => hmsActions.leave());

  return (
    <HStack p={{ base: 8, lg: 16 }} alignSelf="center">
      <IconButton
        colorScheme={"orange"}
        size="lg"
        onClick={toggleAudio}
        aria-label="audio"
        icon={
          audioEnabled ? (
            <BsMic fontSize="25px" />
          ) : (
            <BsMicMute fontSize="25px" />
          )
        }
      />

      <IconButton
        w="100px"
        colorScheme="#C53030"
        color={"white"}
        bg="#C53030"
        aria-label="leave-chat"
        size="lg"
        onClick={leaveCall}
        icon={<FaPhoneSlash fontSize={"25px"} />}
      />

      <IconButton
        colorScheme="blue"
        aria-label="video"
        size="lg"
        onClick={toggleVideo}
        icon={
          videoEnabled ? (
            <BsCameraVideo fontSize="25px" />
          ) : (
            <BsCameraVideoOff fontSize="25px" />
          )
        }
      />
    </HStack>
  );
}

export default Controllers;
