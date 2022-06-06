import { useAuth } from "@/hooks/useAuth";
import { TUser } from "@/types";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { changeStudentLevel, fetchStudentsOfLevel } from "services/firestore";
import useSWR from "swr";
import Table from "./Table";

const StudentsOfLevel = () => {
  const { currentUserData } = useAuth();
  const toast = useToast();

  const { data } = useSWR("GET_STUDENTS_OF_LEVEL", () =>
    fetchStudentsOfLevel(currentUserData),
  );

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
        Header: "Level",
        accessor: (u: TUser) => {
          return u?.level ? u.level : "--";
        },
      },

      {
        Header: "Actions",
        accessor: (u) => {
          return (
            <Menu isLazy placement="auto-start">
              <MenuButton as={Button} colorScheme="blue">
                Level
              </MenuButton>
              <MenuList>
                <MenuGroup title="Change">
                  <MenuItem>
                    <Button
                      size="sm"
                      w="100%"
                      colorScheme="blue"
                      variant={u?.level === "A" ? "solid" : "outline"}
                      onClick={() => {
                        changeStudentLevel(u, "A");
                        toast({
                          title: "Done!",
                          description:
                            "The user level has successfully switched to A and it moved to English A section!",
                          status: "success",
                          duration: 9000,
                          position: "top",
                          isClosable: true,
                        });
                      }}>
                      Level A
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    {" "}
                    <Button
                      size="sm"
                      w="100%"
                      colorScheme="blue"
                      variant={u?.level === "B" ? "solid" : "outline"}
                      onClick={() => {
                        changeStudentLevel(u, "B");
                        toast({
                          title: "Done!",
                          description:
                            "The user level has successfully switched to B and it moved to English B section!",
                          status: "success",
                          duration: 9000,
                          position: "top",
                          isClosable: true,
                        });
                      }}>
                      Level B
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      size="sm"
                      w="100%"
                      colorScheme="blue"
                      variant={u?.level === "C" ? "solid" : "outline"}
                      onClick={() => {
                        changeStudentLevel(u, "C");
                        toast({
                          title: "Done!",
                          description:
                            "The user level has successfully switched to C and it moved to English C section!",
                          status: "success",
                          duration: 9000,
                          position: "top",
                          isClosable: true,
                        });
                      }}>
                      Level C
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
    <Box>
      <Text mb={4} fontSize="2xl">
        Level {currentUserData?.level} students
      </Text>
      {!data ? <Spinner /> : <Table data={data as any[]} columns={columns} />}
    </Box>
  );
};

export default StudentsOfLevel;
