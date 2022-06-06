/* eslint-disable @typescript-eslint/no-non-null-assertion */
import MyForm, {
  formErrorMessageStyles,
  inputStyles,
} from "@/components/Form/MyForm";
import SubmitButton from "@/components/Form/SubmitButton";
import AdminDashboardLayout from "@/components/Layout/AdminDashboardLayout";
import Table from "@/components/Table";
import { db, storage } from "@/config/firebase";
import { TClub } from "@/types";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  Icon,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useToast,
  Image,
} from "@chakra-ui/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { Form, Formik, FormikHelpers } from "formik";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import { ChangeEvent, useCallback, useMemo, useRef, useState } from "react";
import { BiUpload } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { fetchClubs } from "services/firestore";
import useSWR, { mutate } from "swr";

const Clubs = () => {
  const { data } = useSWR("GET_CLUBS", fetchClubs);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFlag, setSelectedFlag] = useState<string | ArrayBuffer | null>(
    null,
  );

  const [isUpdate, setIsUpdate] = useState(false);

  const [currentClubValues, setCurrentClubValues] = useState<TCreateClubInput>(
    {} as TCreateClubInput,
  );
  const [currentClubId, setCurrentClubId] = useState<string>("");

  const updateClub = useCallback(
    async (c: TClub) => {
      const { name, helloWord, id } = c;
      setCurrentClubValues({ name, helloWord });
      setCurrentClubId(id);
      setIsUpdate(true);
      onOpen();
    },
    [onOpen],
  );

  const deleteClub = async (id: string) => {
    try {
      await deleteDoc(doc(db, "clubs", id));
      mutate("GET_CLUBS");
    } catch (error) {
      console.log(error);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Flag Thumbnail",
        accessor: (c: TClub) => {
          return <Avatar src={c.image} />;
        },
      },
      {
        Header: "Id",
        accessor: (c) => {
          return c.id;
        },
      },
      {
        Header: "Club Name",
        accessor: "name",
      },
      {
        Header: "Hello Word",
        accessor: "helloWord",
      },
      {
        Header: "Created At",
        accessor: (c: TClub) => {
          return moment(c.createdAt.toDate()).format("LLL");
        },
      },
      {
        Header: "Actions",
        accessor: (c: TClub) => {
          return (
            <>
              <Button
                size="sm"
                colorScheme="green"
                variant="outline"
                _active={{ bg: "green.600", color: "white" }}
                onClick={() => updateClub(c)}>
                Update
              </Button>
              <Button
                mt={2}
                size="sm"
                colorScheme="red"
                variant="outline"
                _active={{ bg: "red.600", color: "white" }}
                onClick={() => deleteClub(c.id)}>
                Remove
              </Button>
            </>
          );
        },
      },
    ],
    [updateClub],
  );

  type TCreateClubInput = {
    name: string;
    helloWord: string;
  };

  const onCreate = async (
    data: TCreateClubInput,
    { resetForm }: FormikHelpers<TCreateClubInput>,
  ) => {
    const { name, helloWord } = data;
    try {
      const docRef = await addDoc(collection(db, "clubs"), {
        name,
        helloWord,
        createdAt: serverTimestamp(),
      });
      await updateDoc(doc(db, "clubs", docRef.id), {
        id: docRef.id,
      });
      setSelectedFlag(null);
      resetForm();
      onClose();
      mutate("GET_CLUBS");

      const flagRef = ref(storage, `clubs/${docRef.id}/flag`);

      if (selectedFlag) {
        await uploadString(flagRef, selectedFlag as string, "data_url");
        const downloadUrl = await getDownloadURL(flagRef);
        await updateDoc(doc(db, "clubs", docRef.id), {
          image: downloadUrl,
        });
        setSelectedFlag(null);
        resetForm();
        onClose();
        mutate("GET_CLUBS");
      }
    } catch (err: any) {
      toast({
        title: `${err.message}`,
        status: "error",
        isClosable: true,
        duration: 8000,
      });
    }
  };

  const onUpdate = async (
    { name, helloWord }: TCreateClubInput,
    { resetForm }: FormikHelpers<TCreateClubInput>,
  ) => {
    await updateDoc(doc(db, "clubs", currentClubId), {
      name,
      helloWord,
    });
    resetForm();
    onClose();
    mutate("GET_CLUBS");
  };

  const initialValues: TCreateClubInput = {
    name: "",
    helloWord: "",
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const addFlagToClub = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFlag(readerEvent.target!.result);
    };
  };

  return (
    <AdminDashboardLayout>
      <Heading m={4} color="blue.700">
        Clubs Manager
      </Heading>
      <Button m={4} onClick={onOpen} colorScheme="blue">
        Add Club
      </Button>
      {!data ? <Spinner /> : <Table data={data} columns={columns} />}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="blue.500" p={8}>
          <MyForm formTitle="Create Club">
            <Formik
              initialValues={!isUpdate ? initialValues : currentClubValues}
              onSubmit={!isUpdate ? onCreate : onUpdate}>
              {({
                values,
                errors,
                handleChange,
                handleBlur,
                touched,
                dirty,
                isValid,
                isSubmitting,
              }) => (
                <Flex
                  as={Form}
                  w="100%"
                  mt={{ base: 2, lg: 6 }}
                  flexDir="column"
                  boxShadow="none"
                  borderColor="white">
                  <FormControl
                    isInvalid={!isEmpty(errors.name) && touched.name}
                    mb={2}>
                    <Input
                      name="name"
                      autocomplete="name"
                      placeholder="Club Name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                      {...inputStyles}
                    />

                    <FormErrorMessage {...formErrorMessageStyles}>
                      {errors.name}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!isEmpty(errors.helloWord) && touched.helloWord}
                    mb={2}>
                    <Input
                      name="helloWord"
                      autocomplete="helloWord"
                      placeholder="Hello Word"
                      onChange={handleChange}
                      value={values.helloWord}
                      onBlur={handleBlur}
                      {...inputStyles}
                    />

                    <FormErrorMessage {...formErrorMessageStyles}>
                      {errors.helloWord}
                    </FormErrorMessage>
                  </FormControl>

                  {!selectedFlag && (
                    <FormControl
                      bg="white"
                      display="flex"
                      cursor="pointer"
                      {...(isUpdate && { display: "none" })}
                      alignItems="center"
                      justifyContent="center"
                      transition="all .3s ease"
                      _active={{
                        transform: "scale(.95)",
                      }}
                      onClick={() => fileRef.current?.click()}>
                      <HStack>
                        <Text m="auto" d="inline">
                          Upload the flag SVG
                        </Text>
                        <Icon as={BiUpload} w={5} h={5} />
                      </HStack>
                      <Input
                        type="file"
                        ref={fileRef}
                        name="flagSvg"
                        hidden
                        onChange={addFlagToClub}
                      />
                    </FormControl>
                  )}
                  {selectedFlag && (
                    <Box
                      w="148px"
                      h="111px"
                      position="relative"
                      className="image-box"
                      border="1px solid white">
                      <Icon
                        bg="white"
                        fontSize="30px"
                        zIndex={999}
                        cursor="pointer"
                        as={GrFormClose}
                        position="absolute"
                        right="0"
                        onClick={() => setSelectedFlag(null)}
                      />
                      <Image src={selectedFlag as string} alt="Image" />
                    </Box>
                  )}
                  <SubmitButton
                    hover={false}
                    label={!isUpdate ? "Create" : "Update"}
                    dirty={dirty}
                    isValid={isValid}
                    isSubmitting={isSubmitting}
                  />
                </Flex>
              )}
            </Formik>
          </MyForm>
        </ModalContent>
      </Modal>
    </AdminDashboardLayout>
  );
};

Clubs.displayName = "AdminDashboard";
export default Clubs;
