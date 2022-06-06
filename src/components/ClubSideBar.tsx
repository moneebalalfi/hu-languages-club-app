import { useAuth } from "@/hooks/useAuth";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { MdDashboard } from "react-icons/md";
import clubsMenuItems from "utils/clubsMenuItems";
import ClubMenu from "./ClubMenu";
import InstructorDashboardDrawer from "./InstructorDashboardDrawer";

const ClubSideBar: FC = () => {
  const { colorMode } = useColorMode();
  const { currentUserData } = useAuth();
  const { asPath } = useRouter();
  const { onOpen, onClose, isOpen } = useDisclosure();

  console.log(asPath);
  return (
    <>
      <Box
        {...(colorMode === "light" && { bg: "white.50" })}
        maxW="360px"
        overflow="auto"
        width="30%"
        d={{ base: "none", lg: "block" }}
        minW="30%"
        maxH={{ lg: "100vh" }}>
        <InstructorDashboardDrawer onClose={onClose} isOpen={isOpen} />
        <Heading fontSize="2xl" p={4}>
          English Club{" "}
          <Text color="blue.600" display="inline-block">
            {currentUserData?.level && `- Level ${currentUserData?.level}`}
          </Text>
        </Heading>
        <Divider mb={8} />
        {clubsMenuItems.map((item) => {
          return (
            <NextLink key={item.id} href={item.href}>
              <HStack
                {...(asPath === item.href && {
                  bg: colorMode === "light" ? "gray.200" : "whiteAlpha.200",
                })}
                cursor="pointer"
                px="8px"
                m={2}
                rounded={8}
                py="12px"
                _hover={{
                  bg: colorMode === "light" ? "gray.200" : "whiteAlpha.200",
                }}>
                <Icon
                  as={item.icon}
                  width="30px"
                  height="30px"
                  color="blue.500"
                />
                <Text display="inline-block">{item.text}</Text>
              </HStack>
            </NextLink>
          );
        })}

        {currentUserData?.userType === "instructor" && (
          <>
            <Divider />

            <HStack
              cursor="pointer"
              px="8px"
              m={2}
              rounded={8}
              onClick={onOpen}
              py="12px"
              _hover={{
                bg: colorMode === "light" ? "gray.200" : "whiteAlpha.200",
              }}>
              <Icon
                as={MdDashboard}
                width="30px"
                height="30px"
                color="blue.500"
              />
              <Text display="inline-block">Instructor Dashboard</Text>
            </HStack>
          </>
        )}
      </Box>
      <ClubMenu />
    </>
  );
};

export default ClubSideBar;
