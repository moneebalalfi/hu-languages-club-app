import { useAuth } from "@/hooks/useAuth";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { sideBarItems } from "utils";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  const { pathname } = router;
  const { currentUserData, logOut } = useAuth();

  return (
    <Flex
      as="aside"
      flexDir="column"
      alignItems="center"
      h="100vh"
      overflow={"auto"}
      borderRightWidth="1px"
      {...(isOpen ? { w: "300px" } : { w: "100px" })}
      bg="white">
      {/* Header */}
      <Box
        as="header"
        data-id="SideBar-Header"
        alignItems="center"
        d="flex"
        flexDir="column"
        mb={{ base: 6, lg: 12 }}>
        <Icon
          as={isOpen ? BsArrowLeft : AiOutlineMenuUnfold}
          w={14}
          h={14}
          cursor="pointer"
          {...(isOpen && { alignSelf: "end" })}
          onClick={() => setIsOpen(!isOpen)}
        />

        <NextLink href="/">
          <Flex {...(!isOpen && { display: "none" })} flexDir="column">
            <Heading
              letterSpacing="wider"
              cursor="pointer"
              lineHeight="1.4"
              color="gray.900"
              ml={{ lg: 2 }}>
              <Text fontWeight="bold">HULC</Text>
              <Text color="gray.500" fontSize={18}>
                Management Control
              </Text>
            </Heading>
          </Flex>
        </NextLink>
      </Box>

      {/* Item list */}
      <VStack w="100%" alignItems="center" justify="center">
        {sideBarItems.map((item) => {
          const isActive = pathname.includes(item.pathName);

          return (
            <NextLink
              key={item.id}
              href={`/admin/dashboard/${item.pathName}`}
              passHref>
              <Link
                width="100%"
                px={6}
                py={4}
                borderRight={isActive ? "5px solid #5d9cec" : "none"}
                letterSpacing="wider"
                fontSize="15px"
                textTransform="uppercase"
                bg={isActive ? "#5d9cec33" : "white"}
                _hover={{
                  textDecor: "none",
                  color: "gray.900",
                  bg: isActive ? "#5d9cec33" : "gray.50",
                }}>
                <HStack>
                  <Icon
                    as={item.icon}
                    {...(!isOpen && { m: "auto" })}
                    w={8}
                    h={8}
                  />
                  <Text {...(!isOpen && { display: "none" })}>
                    {item.title}
                  </Text>
                </HStack>
              </Link>
            </NextLink>
          );
        })}
      </VStack>

      {/* Admin Info */}
      <VStack
        w="80%"
        letterSpacing="wider"
        alignItems="center"
        mt={12}
        justifySelf={"end"}>
        <Avatar
          name={currentUserData?.displayName}
          {...(!isOpen && { display: "none" })}
        />
        <Text
          {...(!isOpen && { display: "none" })}
          as="span"
          fontWeight="bold"
          color="huBlue"
          textTransform="uppercase"
          fontSize="2xl">
          {currentUserData?.displayName}
        </Text>
        <Text as="span" color="gray.500" {...(!isOpen && { display: "none" })}>
          {currentUserData?.email}
        </Text>
      </VStack>

      <Flex
        mt={12}
        alignItems={"center"}
        fontSize="2xl"
        cursor="pointer"
        _hover={{ textDecor: "underline" }}
        onClick={() => logOut()}>
        <Icon
          d="inline-block"
          mr={2}
          as={BiExit}
          w={!isOpen ? 12 : 6}
          h={!isOpen ? 12 : 6}
        />
        <Text {...(!isOpen && { display: "none" })}>Exit!</Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
