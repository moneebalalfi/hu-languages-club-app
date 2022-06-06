/* eslint-disable react/jsx-key */
// 💡 key is already included but still the file 😭 for it.
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Table as ChakraTable,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { AiFillCaretUp, AiFillCaretLeft } from "react-icons/ai";

import { FC } from "react";
import {
  useFlexLayout,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

interface TableProps {
  caption?: string;
  columns: any;
  data: any[];
}
const Table: FC<TableProps> = ({ columns, data, caption }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    pageCount,
    prepareRow,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      autoResetPage: false,
      autoResetFilters: false,
      autoResetGlobalFilter: false,
      autoResetSortBy: false,
      columns,
      data,
      initialState: {
        pageSize: 10,
        hiddenColumns: columns.map((column: any) => {
          if (column.show === false) return column.accessor || column.id;
        }),
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useFlexLayout,
  );

  return (
    <>
      <FormControl id="filterBy" paddingX={8} paddingY={6} bg="white">
        <FormLabel>Search:</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Box width="16px" color="gray.400">
              <BiSearch />
            </Box>
          </InputLeftElement>
          <Input
            variant="outline"
            type="text"
            placeholder={`Search ${preGlobalFilteredRows.length} records`}
            onChange={(e) => {
              setGlobalFilter(e.target.value);
            }}
            autoFocus
          />
        </InputGroup>
        <FormHelperText>Search anything in the table.</FormHelperText>
      </FormControl>
      <Box
        className="table__box"
        maxWidth="100%"
        overflowX="auto"
        paddingX={8}
        paddingY={8}
        backgroundColor="gray.50">
        <ChakraTable
          variant="simple"
          {...getTableProps()}
          bg="white"
          borderRadius="xl">
          {caption && (
            <TableCaption paddingY={0} marginBottom={0}>
              {caption}
            </TableCaption>
          )}

          <Thead overflowY="auto" overflowX="hidden">
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <Th
                      {...column.getHeaderProps()}
                      color="brand.600"
                      fontWeight="800"
                      fontSize="sm"
                      paddingY={6}>
                      <Box
                        className=""
                        display="flex"
                        alignItems="center"
                        {...(column.canSort
                          ? column.getSortByToggleProps()
                          : {})}>
                        {column.render("Header")}
                        {column.canSort && column.isSorted && (
                          <Box
                            width="12px"
                            marginLeft={2}
                            color="gray.400"
                            {...(!column.isSortedDesc && {
                              transform: "rotate(180deg)",
                            })}>
                            {column.isSortedDesc ? (
                              <AiFillCaretUp />
                            ) : (
                              <AiFillCaretUp />
                            )}
                          </Box>
                        )}
                      </Box>
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>

          <Tbody
            {...getTableBodyProps()}
            fontSize="sm"
            overflowY="auto"
            overflowX="hidden">
            {!page.length ? (
              <Alert
                status="warning"
                variant="subtle"
                alignItems="center"
                justifyContent="center">
                <AlertIcon />
                <AlertTitle mr={2}>Nothing found! ={">"}</AlertTitle>
                <AlertDescription>
                  Nothing found on this table 🤷🏻‍♂️ ... Try a new search 🔎
                </AlertDescription>
              </Alert>
            ) : (
              <>
                {page.map((row, index) => {
                  prepareRow(row);

                  return (
                    <Tr
                      {...row.getRowProps()}
                      _hover={{
                        backgroundColor: "yellow.50",
                      }}
                      borderLeft="4px solid"
                      borderLeftColor="brand.500"
                      alignItems="center"
                      {...(index % 2 === 0 && { backgroundColor: "gray.100" })}>
                      {row.cells.map((cell) => {
                        return (
                          <Td {...cell.getCellProps()} borderBottomWidth="0">
                            {" "}
                            {cell.render("Cell")}{" "}
                          </Td>
                        );
                      })}
                    </Tr>
                  );
                })}
              </>
            )}
          </Tbody>
        </ChakraTable>
        {pageCount > 1 && (
          <HStack
            spacing={2}
            className="table__controllers"
            alignItems="flex-end"
            justifyContent="flex-end"
            mt={2}>
            <IconButton
              colorScheme="brand"
              borderRadius="full"
              aria-label="Previous Page"
              size="sm"
              isDisabled={!canPreviousPage}
              variant="ghost"
              onClick={() => {
                previousPage();
              }}>
              <AiFillCaretLeft />
            </IconButton>

            <IconButton
              variant="ghost"
              colorScheme="brand"
              borderRadius="full"
              aria-label="Nest Page"
              size="sm"
              isDisabled={!canNextPage}
              transform="rotate(180deg)"
              onClick={() => {
                nextPage();
              }}>
              <AiFillCaretLeft />
            </IconButton>
          </HStack>
        )}
      </Box>
    </>
  );
};

export default Table;
