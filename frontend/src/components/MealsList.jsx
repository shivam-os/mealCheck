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
import { mealRecords } from "../data";

export default function MealsList() {
  return (
    <>
      <HStack spacing="5" w="60%" pb="10">
        <Text>Filter: </Text>
        <Select size="sm">
          <option>All</option>
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </Select>
        <Button colorScheme="facebook" px="5">
          Search
        </Button>
      </HStack>
      <TableContainer w="100%" mt="20">
        <Table variant="simple">
          <Thead bgColor="#f4f6f8">
            <Tr>
              <Th>Time</Th>
              <Th>Meal</Th>
              <Th>Cals</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mealRecords.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>
                    {item.date}-{item.time}
                  </Td>
                  <Td>{item.mealName}</Td>
                  <Td>{item.calories}</Td>
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
  );
}
