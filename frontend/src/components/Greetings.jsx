import {VStack, Heading, Text, Button} from "@chakra-ui/react"

export default function Greetings() {
  return (
    <VStack bgColor="cyan.100" mb="20" px="5" py="10" rounded="xl" spacing="5">
      <Heading>Welcome Back!</Heading>
      <Heading>Shivam</Heading>
      <Text textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis cupiditate vitae amet cum laudantium.</Text>
      <Button colorScheme="whatsapp">Add Meal</Button>
    </VStack>
  )
}
