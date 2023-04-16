import {
  VStack,
  Button,
  Heading,
  Text,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <VStack px="5" w="100%" pt="30" spacing="5">
      <Text fontWeight="600" fontSize="2xl">
        Track your healthy meals with
      </Text>
      <Heading
        bgGradient="linear(to-l, #4dab3b, #faaf00)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="800"
      >
        MealCheck
      </Heading>
      <Text textAlign="center" pb="10">
        With over 900K+ foods in database to search from. This ensures that your
        calories calculations are as precise as possible!
      </Text>
      <Button
        
        as={NavLink}
        to="/register"
        variant="outline"
        colorScheme="facebook"
        size="lg"
      >
        Register
      </Button>
      <Button
        as={NavLink}
        to="/login"
        variant="solid"
        colorScheme="facebook"
        size="lg"
      >
        Login
      </Button>
      <VStack pt="20">
        <Heading fontWeight="600" fontSize="2xl">Perform all operations like: </Heading>
      </VStack>
      <List spacing="5">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Create new records
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          View records from database
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Update previous records
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Delete existing records
        </ListItem>
      </List>
    </VStack>
  );
}
