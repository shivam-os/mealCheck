import {VStack, Heading, Text, Button} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"

export default function Greetings() {
  return (
    <VStack bgColor="cyan.100" px="5" py="10" rounded="xl" spacing="5">
      <Heading>Welcome Shivam!</Heading>
      <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis cupiditate vitae amet cum laudantium.</Text>
      <Button colorScheme="whatsapp" as={NavLink} to="/dashboard/addmeal">Add Meal</Button>
    </VStack>
  )
}
