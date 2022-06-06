import {
  HMSPeer,
  selectLocalPeer,
  selectPeers,
  useHMSStore,
} from "@100mslive/hms-video-react";
import { Flex, Grid, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MdGroupWork } from "react-icons/md";
import useSound from "use-sound";
import Controllers from "./Controllers";
import Peer from "./Peer";

function Meeting({}) {
  const { colorMode } = useColorMode();

  const peers = useHMSStore(selectPeers);
  const router = useRouter();
  const localPeer = useHMSStore(selectLocalPeer);
  const joinMeeting = useSound("/sounds/join-meeting.mp3");
  const { roomname } = router.query;

  const [play] = joinMeeting;

  useEffect(() => {
    play();
  }, [play]);

  return (
    <Flex
      pos="relative"
      h={{ base: "100%", lg: "calc(100vh - 10vh)" }}
      flexDir="column"
      overflowY="auto"
      justifyContent="center"
      {...(colorMode === "light" && { bg: "blue.50" })}
      alignItems={"center"}>
      <Flex p={{ base: 8, lg: 16 }} flexDir="column" h="100%" mt={4}>
        <Heading fontWeight={"medium"}>
          <Icon as={MdGroupWork} w={10} h={10} verticalAlign="bottom" /> Room
          name:{" "}
          <Heading
            letterSpacing={1}
            as="span"
            color={colorMode === "dark" ? "gray.200" : "blue.700"}>
            {roomname}
          </Heading>
        </Heading>

        <Grid
          mt={12}
          className="peers"
          templateColumns={{
            base: `repeat(1, 1fr)`,
            md: `repeat(${peers.length === 1 ? "1" : "2"}, 1fr)`,
            lg: `repeat(${
              peers.length === 1 ? "1" : peers.length === 2 ? "2" : "3"
            }, 1fr)`,
          }}
          gap={4}>
          <Peer peer={localPeer} />

          {peers
            .filter((peer) => !peer.isLocal)
            .map((peer: HMSPeer) => (
              <Peer key={peer.id} peer={peer} />
            ))}
        </Grid>
        <Controllers />
      </Flex>
    </Flex>
  );
}

export default Meeting;
