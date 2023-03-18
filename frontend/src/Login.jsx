import {VStack, Heading, Text, Input, Button} from "@chakra-ui/react"

export default function Login() {
  return (
    <VStack mx="auto" w="70%" alignItems="flex-start" spacing="5" px="5" py="15" rounded="xl" shadow="2xl">
      <Heading>Sign in to MealTracker</Heading>
      <Text>New User? <b>Create an account</b></Text>
      <Input type="text" placeholder="Email address"/>
      <Input type="text" placeholder="Password" />
      <Text alignSelf="flex-end" as="u">Forgot Password?</Text>
      <Button alignSelf="stretch" colorScheme="facebook">Login</Button>
    </VStack>
  )
}
