import { useAuth } from "@/hooks/useAuth";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CgClose } from "react-icons/cg";
import { ImMenu3 } from "react-icons/im";
import { MdDashboard } from "react-icons/md";
import clubsMenuItems from "../utils/clubsMenuItems";

const ClubMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, currentUserData } = useAuth();

  const { colorMode } = useColorMode();
  const { asPath } = useRouter();

  return (
    <>
      <Icon
        as={ImMenu3}
        ml={10}
        mt={4}
        cursor="pointer"
        width={14}
        height={14}
        display={{ lg: "none" }}
        onClick={onOpen}
        color={colorMode === "light" ? "blue.700" : "whitesmoke"}
      />

      <Drawer onClose={onClose} isOpen={isOpen} isFullHeight placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <Icon
            as={CgClose}
            pos="absolute"
            top={2}
            right={2}
            cursor="pointer"
            width={9}
            height={9}
            onClick={onClose}
            color={colorMode === "light" ? "blue.700" : "whitesmoke"}
          />
          <DrawerHeader>{`HU Languages Club - English ${
            user ? currentUserData?.level && currentUserData?.level : ""
          }`}</DrawerHeader>
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ClubMenu;
