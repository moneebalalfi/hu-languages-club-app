/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AdminDashboardLayout from "@/components/Layout/AdminDashboardLayout";
import Table from "@/components/Table";
import { Avatar, Button, Heading, Spinner } from "@chakra-ui/react";
import { DocumentData } from "firebase/firestore";
import moment from "moment";
import { useMemo } from "react";
import { deletePost, fetchPosts } from "services/firestore";
import useSWR from "swr";

const PostsManager = () => {
  const { data } = useSWR("GET_POSTS", fetchPosts);

  const columns = useMemo(
    () => [
      {
        Header: "Photo",
        accessor: (p: DocumentData) => {
          return <Avatar src={p?.image} {...(!p.image && { name: "X" })} />;
        },
      },
      {
        Header: "Text",
        accessor: "text",
      },
      {
        Header: "Creator",
        accessor: "userName",
      },
      {
        Header: "Creation Time",
        accessor: (p) => {
          // const x = moment(p.createdAt).format();
          const date = p.createdAt.toDate();
          const formatedTime = moment(date).fromNow();
          return formatedTime;
        },
      },
      {
        Header: "Acrions",
        accessor: (p) => {
          return (
            <Button
              size="sm"
              colorScheme="red"
              variant="outline"
              onClick={() => deletePost(p.id)}>
              Delete
            </Button>
          );
        },
      },
    ],
    [],
  );

  return (
    <AdminDashboardLayout>
      <Heading ml={4} color="blue.700" m={4}>
        Posts Manager
      </Heading>
      {!data ? <Spinner /> : <Table data={data} columns={columns} />}
    </AdminDashboardLayout>
  );
};

PostsManager.displayName = "AdminDashboard";
export default PostsManager;
