/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CustomSpinner from "@/components/CustomSpinner";
import Post from "@/components/Post";
import { auth, db } from "@/config/firebase";
import { useAuth } from "@/hooks/useAuth";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Spinner,
  Text,
  useBoolean,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";

import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { GiLevelThree } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { fetchPostsOfUser } from "services/firestore";
import useSWR from "swr";
import { useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "@chakra-ui/react";

const Profile = () => {
  const { user, currentUserData } = useAuth();
  const { colorMode } = useColorMode();

  const toast = useToast();
  const [isEmailVerificationSent, setIsEmailVerificationSent] = useBoolean();
  // const fileRef = useRef<HTMLInputElement>(null);

  const { data: posts } = useSWR("GET_POSTS_OF_USER", () =>
    fetchPostsOfUser(currentUserData?.displayName as string),
  );

  const verifyEmail = async () => {
    if (isEmailVerificationSent) return;

    sendEmailVerification(auth.currentUser!)
      .then(() => {
        // Email verification sent!

        setIsEmailVerificationSent.on();

        toast({
          title: "Confirmation Email Sent",
          description:
            "We sent you a confirmation email, please check your inbox!",
          status: "info",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (currentUserData) {
      return auth.onAuthStateChanged(async (user) => {
        if (!currentUserData.emailVerified) {
          await updateDoc(doc(db, "users", currentUserData.docId), {
            emailVerified: user?.emailVerified || false,
          });
        }
      });
    }

    return () => null;
  }, [currentUserData]);

  if (!user || !currentUserData) return <CustomSpinner />;

  const { email, emailVerified, displayName, userType, level } =
    currentUserData!;

  return (
    <Flex flexDir={"column"} {...(colorMode === "light" && { bg: "blue.50" })}>
      <Box w="100%" h="200px">
        <Image
          w="100%"
          h={{ base: "150px", lg: "200px" }}
          objectFit={"cover"}
          src="/images/profile-header.svg"
          alt="Profile-page"
        />
      </Box>

      <Flex w="80%" m="auto" flexDir={{ base: "column", lg: "row" }}>
        <Flex
          w={{ base: "100%", lg: "30%" }}
          flexDir={"column"}
          mb={{ base: 6, lg: 0 }}
          p={{ base: 2, lg: 16 }}>
          <Flex mt={-32} w="100%" flexDir={"column"}>
            <Avatar name={displayName} size="2xl" mb={2} />
            <Heading
              alignSelf={{ base: "flex-start", lg: "flex-end" }}
              fontSize={"3xl"}>
              {displayName}
            </Heading>
          </Flex>

          <Flex flexDir={"column"} mt={12}>
            <Box>
              {user && !emailVerified ? (
                <Button
                  w="100%"
                  onClick={verifyEmail}
                  colorScheme={isEmailVerificationSent ? "yellow" : "red"}
                  variant="outline"
                  disabled={isEmailVerificationSent}
                  loadingText="Sending ..."
                  fontSize="md">
                  <Icon mr={2} w={6} h={6} as={FiAlertCircle} />
                  {isEmailVerificationSent
                    ? "Check your inbox"
                    : "Verify my email!"}
                </Button>
              ) : (
                <Badge
                  w="100%"
                  fontSize="2xl"
                  colorScheme={"green"}
                  textAlign="center">
                  Verified!
                </Badge>
              )}
            </Box>
            <Flex flexDir={"column"} mt={12}>
              <Text fontWeight={"bold"} fontSize="19px" letterSpacing={"1"}>
                ABOUT
              </Text>
              <Divider mb={4} />
              {userType === "student" && (
                <Flex flexDir="column">
                  <HStack>
                    <Icon as={IoSchool} w={6} h={6} />
                    <Text fontWeight={"bold"}>Student ID</Text>
                  </HStack>
                  <Text ml="auto" w="80%">
                    {email.substring(0, 7)}
                  </Text>
                </Flex>
              )}
              <Flex flexDir="column" mt={4}>
                <HStack>
                  <Icon as={HiIdentification} w={6} h={6} />
                  <Text fontWeight={"bold"}>Full Name</Text>
                </HStack>
                <Text ml="auto" w="80%">
                  {displayName}
                </Text>
              </Flex>
              <Flex flexDir="column" mt={4}>
                <HStack>
                  <Icon as={MdEmail} w={6} h={6} />
                  <Text fontWeight={"bold"}>E-Mail</Text>
                </HStack>
                <Text ml="auto" w="80%">
                  {email}
                </Text>
              </Flex>
              <Flex flexDir="column" mt={4}>
                <HStack>
                  <Icon as={RiAdminFill} w={6} h={6} />
                  <Text fontWeight={"bold"}>Role</Text>
                </HStack>
                <Text ml="auto" w="80%" textTransform="capitalize">
                  {userType}
                </Text>
              </Flex>

              <Flex flexDir="column" mt={4}>
                <HStack>
                  <Icon as={GiLevelThree} w={6} h={6} />
                  <Text fontWeight={"bold"}>Level</Text>
                </HStack>
                <Text ml="auto" w="80%" textTransform="capitalize">
                  {level}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          w={{ base: "100%", lg: "70%" }}
          p={{ base: 2, lg: 16 }}
          alignItems="start">
          <Heading fontWeight={"bold"} fontSize="2xl" mb={4} letterSpacing={1}>
            {posts && posts.length === 0 ? "No Activities" : "Your activities"}
            {posts && posts.length === 0 && (
              <Text fontFamily="Red Hat Display, Ubonto" fontSize="md" mt={4}>
                Choose a club and start creating posts{" "}
                <Text
                  color="teal.500"
                  as={Link}
                  href="/clubs"
                  textTransform="uppercase">
                  HU Clubs
                </Text>
              </Text>
            )}
          </Heading>
          {!posts ? (
            <Spinner color="blue.300" alignSelf="center" />
          ) : (
            posts.map((post) => <Post key={post.id} post={post} w="100%" />)
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;

// const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
//   null,
// );

// const setSelectedImage = (e: ChangeEvent<HTMLInputElement>) => {
//   const reader = new FileReader();

//   if (e.target.files) {
//     reader.readAsDataURL(e.target.files[0]);
//   }

//   reader.onload = (readerEvent) => {
//     setSelectedFile(readerEvent.target!.result);
//   };
// };

// const changePhoto = async (user: User) => {
//   if (selectedFile) {
//     const fileRef = ref(storage, `users/${user.uid}/photoURL`);
//     await uploadString(fileRef, selectedFile as string, "data_url");
//     const downloadUrl = await getDownloadURL(fileRef);
//     await updateProfile(user, {
//       photoURL: downloadUrl,
//     });
//     setSelectedFile(null);
//   }
// };
