import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack,
  Text,
  Select,
  Button,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { users } from "../data";

export default function UsersList() {
  return (
    <>
      <HStack spacing="5" w="60%" pb="10">
        <Text>Filter: </Text>
        <Select size="sm">
          <option>All</option>
          <option>Only admins</option>
          <option>Only users</option>
        </Select>
        <Button colorScheme="facebook" px="5">
          Search
        </Button>
      </HStack>
      <TableContainer w="100%" mt="20">
        <Table variant="simple">
          <Thead bgColor="#f4f6f8">
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    {i}
                  </Td>
                  <Td>
                    {item.name}
                  </Td>
                  <Td>{item.role}</Td>
                  <Td>
                    <EditIcon />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}
