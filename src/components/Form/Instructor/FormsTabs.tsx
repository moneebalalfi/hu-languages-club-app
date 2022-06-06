import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Box,
  Text,
  Tabs,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RoughNotation } from "react-rough-notation";
import InstructorLoginForm from "./InstructorLoginForm";
import InstructorRegisterForm from "./InstructorRegisterForm";

const FormsTabs = () => {
  return (
    <Box px={{ base: 0, lg: 8 }} pt={{ base: 6, lg: 0 }}>
      <VStack alignItems="flex-start" mb={{ base: 6, lg: 8 }}>
        <Heading mb={4}>Welcome to HULC, Dear professor!</Heading>
        <Text>
          We&apos;re happy to have you here,{" "}
          <Text ml={2} as="span" fontWeight={"bold"}>
            <RoughNotation type="box" show color="#F6AD55" strokeWidth={3}>
              join us!
            </RoughNotation>
          </Text>
        </Text>
      </VStack>
      <Tabs variant="soft-rounded" isLazy defaultIndex={1}>
        <TabList mb={{ base: 2, lg: 4 }}>
          <Tab fontWeight="bold">Register</Tab>
          <Tab fontWeight="bold" ml={2}>
            Log In
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <InstructorRegisterForm />
          </TabPanel>
          <TabPanel>
            <InstructorLoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FormsTabs;
