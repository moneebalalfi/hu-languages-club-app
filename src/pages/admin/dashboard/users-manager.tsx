/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AdminDashboardLayout from "@/components/Layout/AdminDashboardLayout";
import Table from "@/components/Table";
import {
  Avatar,
  Badge,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import moment from "moment";
import { useMemo } from "react";
import { fetchUsers } from "services/firestore";
import {
  setAdminRole,
  setInstructorRole,
  setStudentRole,
} from "services/setUserRole";
import useSWR from "swr";
import { TUser } from "types";

const UsersManager = () => {
  const { data } = useSWR("GET_USERS", fetchUsers);

  const columns = useMemo(
    () => [
      {
        Header: "Photo",
        accessor: (u: TUser) => {
          return <Avatar src={u?.photoUrl} />;
        },
      },
      {
        Header: "Name",
        accessor: "displayName",
      },
      {
        Header: "Email Address",
        accessor: "email",
      },
      {
        Header: "User Type",
        accessor: "userType",
      },
      {
        Header: "Level",
        accessor: (u: TUser) => {
          return u?.level ? u.level : "--";
        },
      },
      {
        Header: "Verified?",
        accessor: (u: TUser) => {
          return u?.emailVerified ? (
            <Badge colorScheme="green" fontSize="sm">
              Verified
            </Badge>
          ) : (
            <Badge colorScheme="red" fontSize="sm">
              Not Verified
            </Badge>
          );
        },
      },
      {
        Header: "Creation Time",
        accessor: (u: TUser) => {
          const formatedTime = moment(u?.createdAt).format(
            "MMMM Do YYYY, h:mm:ss a",
          );

          return formatedTime;
        },
      },
      {
        Header: "Actions",
        accessor: (u) => {
          return (
            <Menu isLazy placement="auto-start">
              <MenuButton as={Button} colorScheme="blue">
                Role
              </MenuButton>
              <MenuList>
                <MenuGroup title="Change the role">
                  <MenuItem>
                    <Button
                      size="sm"
                      w="100%"
                      colorScheme="blue"
                      variant={u?.userType === "admin" ? "solid" : "outline"}
                      onClick={() => setAdminRole(u)}>
                      Make admin
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <Button
                      size="sm"
                      w="100%"
                      colorScheme="blue"
                      variant={
                        u?.userType === "instructor" ? "solid" : "outline"
                      }
                      onClick={() => setInstructorRole(u)}>
                      Make Instructor
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      size="sm"
                      w="100%"
                      colorScheme="blue"
                      variant={u?.userType === "student" ? "solid" : "outline"}
                      onClick={() => setStudentRole(u)}>
                      Make Student
                    </Button>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          );
        },
      },
    ],
    [],
  );

  return (
    <AdminDashboardLayout>
      <Heading m={4} color="blue.700">
        Users Manager
      </Heading>
      {!data ? <Spinner /> : <Table data={data} columns={columns} />}
    </AdminDashboardLayout>
  );
};

UsersManager.displayName = "AdminDashboard";
export default UsersManager;
