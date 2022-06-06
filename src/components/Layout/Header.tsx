import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RoughNotation } from "react-rough-notation";
import isMobile from "utils/isMobile";
import { useAuth } from "../../hooks/useAuth";
import SwitchColorBtn from "../SwitchColorBtn";

const Header: FC = () => {
  const { colorMode } = useColorMode();
  const { user, currentUserData, logOut } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      id="header-nav"
      px={{ base: 4, md: 6 }}
      py={8}
      className="header"
      bg={colorMode === "light" ? "whitesmoke" : "gray.800"}
      pos="sticky"
      top={0}
      h={"10vh"}
      zIndex={20}
      justifyContent="space-between"
      alignItems={"center"}
      w="100%">
      <NextLink href="/" passHref>
        <Flex cursor={"pointer"} alignItems={{ base: "center", md: "center" }}>
          <Image
            alt="HULC Logo"
            src={"/logos/hulc-logo.svg"}
            w="40px"
            h={{ base: "54px", md: "38px" }}
            mr={2}
          />
          <Heading
            w={{ base: "80%", md: "100%" }}
            fontSize={{ base: "2xl", md: "4xl" }}
            color={colorMode === "dark" ? "whitesmoke" : "blue.700"}>
            <RoughNotation
              type="underline"
              show={isMobile() ? false : true}
              color="#F6AD55"
              strokeWidth={2}
              animationDuration={1000}>
              HU Languages Club
            </RoughNotation>
          </Heading>
        </Flex>
      </NextLink>

      <Flex alignItems="center">
        <Flex display={{ base: "none", lg: "flex" }} alignItems="center" mr={4}>
          {!user ? (
            <>
              <NextLink href="/instructor" passHref>
                <Link> Join as instructor </Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link mx={4}> Log In </Link>
              </NextLink>
              <NextLink href="/register" passHref>
                <Button colorScheme="blue" variant="outline">
                  <Link> Get Started 🚀 </Link>
                </Button>
              </NextLink>
            </>
          ) : (
            <>
              <Menu isLazy>
                <Avatar as={MenuButton} name={currentUserData?.displayName} />
                <MenuList>
                  <MenuGroup
                    title={currentUserData?.displayName}
                    letterSpacing={1}>
                    <NextLink href="/profile" passHref>
                      <MenuItem>
                        Profile page <Icon as={CgProfile} ml={"auto"} />
                      </MenuItem>
                    </NextLink>

                    <MenuDivider />
                    <MenuItem onClick={logOut}>
                      Log out <Icon as={FaSignOutAlt} ml={"auto"} />
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </>
          )}
        </Flex>
        <SwitchColorBtn />
        <IconButton
          aria-label="open-menu"
          size="md"
          ml={2}
          variant="outline"
          display={{ base: "flex", lg: "none" }}
          icon={<HiMenu fontSize="40px" />}
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />

          <DrawerContent zIndex={9999}>
            <DrawerHeader borderBottomWidth="1px" display={"flex"}>
              <Heading fontSize="2xl">
                {!user ? "Welcome to HU Languages Club!" : "Welcome back!"}
              </Heading>
              <Icon ml="auto" as={BsFillEmojiSmileFill} fontSize="30px" />
            </DrawerHeader>
            <VStack
              mx="auto"
              mt={22}
              w="80%"
              spacing={6}
              alignItems="flex-start">
              {!user ? (
                <>
                  <Box w="100%">
                    <Text fontSize="2xl" mb={2} letterSpacing="1px">
                      HU Students:
                    </Text>

                    <VStack alignItems="flex-start" spacing={4}>
                      <Flex flexDir="column" w="100%">
                        <Text mb={2}>Don&apos;t have an account yet!</Text>
                        <NextLink href="/register" passHref>
                          <Box
                            w="50%"
                            alignSelf="flex-end"
                            onClick={onClose}
                            fontWeight="bold">
                            <RoughNotation type="box" color="#3182ce" show>
                              Get Started
                            </RoughNotation>
                          </Box>
                        </NextLink>
                      </Flex>
                      <Flex flexDir="column" w="100%">
                        <Text mb={2}>
                          If you already have account with us, please login:
                        </Text>
                        <NextLink href="/login" passHref>
                          <Box
                            alignSelf="flex-end"
                            w="50%"
                            onClick={onClose}
                            fontWeight="bold">
                            <RoughNotation type="box" color="#3182ce" show>
                              Login
                            </RoughNotation>
                          </Box>
                        </NextLink>
                      </Flex>
                    </VStack>
                  </Box>

                  <Divider my={4} />
                  <Box w="100%">
                    <Text mb={2} fontSize="2xl" letterSpacing="1px">
                      HU professors:
                    </Text>
                    <VStack>
                      <Text mb={2}>
                        You can login or create new account here:
                      </Text>
                      <NextLink href="/instructor" passHref>
                        <Box
                          alignSelf="flex-end"
                          w="50%"
                          onClick={onClose}
                          fontWeight="bold">
                          <RoughNotation type="box" color="#3182ce" show>
                            Join as instructor
                          </RoughNotation>
                        </Box>
                      </NextLink>
                    </VStack>
                  </Box>
                </>
              ) : (
                <>
                  <NextLink href="/profile" passHref>
                    <Button
                      isFullWidth
                      colorScheme="blue"
                      variant="solid"
                      onClick={onClose}>
                      Profile page <Icon as={CgProfile} ml={"auto"} />
                    </Button>
                  </NextLink>

                  <Button
                    isFullWidth
                    colorScheme="red"
                    variant="outline"
                    onClick={() => {
                      onClose();
                      logOut();
                    }}>
                    Log out <Icon as={FaSignOutAlt} ml={"auto"} />
                  </Button>
                </>
              )}
            </VStack>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
};

export default Header;
