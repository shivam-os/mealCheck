import {HStack, Heading, Text} from "@chakra-ui/react"
export default function Header() {
  return (
    <HStack justifyContent="space-between" w="100%" px="5" py="3" mb="5">
      <Heading>MealTracker</Heading>
      <Text>Logout</Text>
    </HStack>
  )
}
