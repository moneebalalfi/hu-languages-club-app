import AdminDashboardLayout from "@/components/Layout/AdminDashboardLayout";
import {
  Badge,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Admin Panel</title>
      </Head>
      <AdminDashboardLayout>
        <Flex
          p={{ base: 8, lg: 16 }}
          alignItems="center"
          justifyContent={"center"}
          flexDir="column">
          <Heading>HULC Management Control</Heading>
          <Flex
            w={{ base: "100%", lg: "90%" }}
            justifyContent="space-between"
            p={{ base: 8, lg: 16 }}
            mt={12}
            flexDir={{ base: "column", lg: "row" }}>
            <Flex flexDir={"column"}>
              <Text>
                <strong>Welcome to HULC Management Control!</strong>
                <Divider my={2} />
                We are currently{" "}
                <Badge as="span" colorScheme="blue">
                  updating
                </Badge>{" "}
                this app, at this moment you only can manage these sections:
              </Text>
              <UnorderedList mt={4}>
                <ListItem>Users</ListItem>
                <ListItem>Clubs</ListItem>
                <ListItem>Posts</ListItem>
              </UnorderedList>
            </Flex>
            <Image
              mt={{ base: 12, lg: 0 }}
              w={{ base: "100%", lg: "60%" }}
              alt="HULC Management Control"
              src="/images/admin-dashboard.jpg"
            />
          </Flex>
        </Flex>
      </AdminDashboardLayout>
    </>
  );
};

Dashboard.displayName = "AdminDashboard";
export default Dashboard;
