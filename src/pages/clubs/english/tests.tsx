import ClubLayout from "@/components/Layout/ClubLayout";
import React from "react";
import {
  Box,
  Button,
  Code,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

const TestsAndQuizzes = () => {
  return (
    <ClubLayout>
      <Box w="100%" maxH={{ lg: "100vh" }} overflow="scroll">
        <Heading fontFamily="Roboto" p={4} fontSize="28px">
          What would you like to practise today?
        </Heading>
        <Text px={4} pb={4} color="orange.500">
          <Text fontWeight="bold" display="inline-block">
            Note:
          </Text>{" "}
          At this moment, these tests are provided by{" "}
          <Code>https://test-english.com/</Code> ... We are working on our own
          tests! 😇
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacingX="40px"
          spacingY="20px"
          p={4}>
          {tests.map((test) => (
            <Box key={test.id} h={500}>
              <Box w="100%" position="relative">
                <Image src={test.image} alt={test.title} />
              </Box>
              <Text py={4} fontWeight="bold" fontSize="2xl">
                {test.title}
              </Text>
              <Text px={2}>{test.desc}</Text>

              <Button
                as="a"
                href={test.url}
                mt={6}
                colorScheme="blue"
                width="full"
                target="_blnck"
                variant="outline"
                textTransform="uppercase">
                {test.buttonLabel}
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ClubLayout>
  );
};

export default TestsAndQuizzes;

const tests = [
  {
    id: 1,
    buttonLabel: "take a level test",
    image: "/images/levelTest.jpeg",
    title: "Level Test",
    desc: "If you are not sure about your level, don't worry, you can take this online test. There are 60 multiple-choice questions and there is no time limit. You will be able to see the answers when you finish the test!",
    url: "https://test-english.com/?p=6251",
  },
  {
    id: 2,
    buttonLabel: "Go to the lessons",
    image: "/images/grammer.jpeg",
    title: "Grammar Points",
    desc: "Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson. And you will find feedback for every question!",
    url: "https://test-english.com/?p=330",
  },
  {
    id: 3,
    buttonLabel: "take a test",
    image: "/images/listening.jpeg",
    title: "Listening tests",
    desc: "Improve your listening skills by practicing with audio and video tests. There are tests for each level: A1, A2, B1, B1+, B2. You will be able to see the transcription of the audio after you submit your answers.",
    url: "https://test-english.com/?p=1131",
  },
  {
    id: 4,
    buttonLabel: "take a test",
    image: "/images/reading.jpeg",
    title: "Reading tests",
    desc: "Need to improve your reading skills? Work on our reading tests. There are reading tests for A1, A2, B1, B1+ and B2. You will find different types of texts and there are different types of questions in each test.",
    url: "https://test-english.com/?p=1129",
  },
  {
    id: 5,
    buttonLabel: "take a test",
    image: "/images/useOfEnglish.jpeg",
    title: "Use of English",
    desc: "In each of these tests you will find 15 multiple-choice questions about the different grammar points that you have studied for a specific level: A1, A2, B1, B1+ and B2.  You will get feedback for every answer.",
    url: "https://test-english.com/?p=1134",
  },
  {
    id: 6,
    buttonLabel: "Go to the lessons",
    image: "/images/writing.jpeg",
    title: "Writing",
    desc: "Improve your writing with the exercises suggested in each lesson. Different types of texts for each level: A1, A2, B1, B1+, or B2. You will learn how to organise and connect the text in your compositions.",
    url: "https://test-english.com/?p=1136",
  },
];
