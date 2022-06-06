import { useAuth } from "@/hooks/useAuth";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import React, { FC } from "react";
import {
  fetchBooksOfInstructor,
  fetchRoomsOfInstructor,
  fetchVideosOfInstructor,
} from "services/firestore";
import useSWR from "swr";
import BooksOfInstructor from "./Instructor/BooksOfInstructor";
import RoomsOfInstructor from "./Instructor/RoomsOfInstructor";
import VideosOfInstructor from "./Instructor/VideosOfInstructor";
import StudentsOfLevel from "./StudentsOfLevel";

interface InstructorDashboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructorDashboardDrawer: FC<InstructorDashboardDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { currentUserData } = useAuth();
  const { colorMode } = useColorMode();

  const { data: roomsOfInstructor } = useSWR("GET_ROOMS_OF_INSTRUCTOR", () =>
    fetchRoomsOfInstructor(currentUserData),
  );

  const { data: booksOfInstructor } = useSWR("GET_BOOKS_OF_INSTRUCTOR", () =>
    fetchBooksOfInstructor(currentUserData),
  );

  const { data: videosOfInstructor } = useSWR("GET_VIDEOS_OF_INSTRUCTOR", () =>
    fetchVideosOfInstructor(currentUserData),
  );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent {...(colorMode === "light" && { bg: "blue.50" })}>
        <DrawerCloseButton />
        <DrawerHeader
          m="auto"
          my={6}
          fontSize="3xl"
          letterSpacing="1px"
          {...(colorMode === "light" && { color: "blue.800" })}>
          Instructor Dashboard
        </DrawerHeader>

        <DrawerBody>
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Rooms</Tab>
              <Tab>Books / PDFs</Tab>
              <Tab>Videos</Tab>
              <Tab>Students</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <RoomsOfInstructor rooms={roomsOfInstructor} />
              </TabPanel>
              <TabPanel>
                <BooksOfInstructor books={booksOfInstructor} />
              </TabPanel>
              <TabPanel>
                <VideosOfInstructor videos={videosOfInstructor} />
              </TabPanel>
              <TabPanel>
                <StudentsOfLevel />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>

        <DrawerFooter>
          <Button onClick={onClose} colorScheme="blue">
            Done
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default InstructorDashboardDrawer;
