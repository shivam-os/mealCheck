import {TableContainer, Table, Thead, Tr, Th, Tbody, Td} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { mealRecords } from "../data";

export default function MealsList() {
  return (
    <TableContainer w="100%" mt="20" border="2px solid black">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Meal</Th>
            <Th>Cals</Th>
            <Th colSpan="2">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {mealRecords.map((item, i) => {
            return (
              <Tr key={i}>
                <Td>{item.date}-{item.time}</Td>
                <Td>{item.mealName}</Td>
                <Td>{item.calories}</Td>
                <Td><EditIcon /></Td>
                <Td><DeleteIcon /></Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
