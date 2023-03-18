import {VStack, Heading, Text, Input, Button} from "@chakra-ui/react"

export default function Signup() {
  return (
    <VStack mx="auto" w="70%" alignItems="flex-start" spacing="5" px="5" py="15" rounded="xl" shadow="2xl">
      <Heading>Register on MealTracker</Heading>
      <Text>Alredy have an account? <b>Log In</b></Text>

      <Input type="text" placeholder="Full Name"/>
      <Input type="text" placeholder="Email address"/>
      <Input type="text" placeholder="Password" />
      <Button alignSelf="stretch" colorScheme="facebook">Create Account</Button>
    </VStack>
  )
}
