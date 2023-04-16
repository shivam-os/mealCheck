import { VStack, Heading, Text, Input, Button, Link, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function MealForm() {
  return (
    <VStack spacing="10" m="50">
      <Link as={NavLink} to="/dashboard" pb="20">
        <Icon as={ArrowBackIcon} />
        Back To Dashboard
      </Link>
      <Heading>Add new meal</Heading>
      <Text>Find your meal in the search box and add a new record.</Text>
      <Input type="text" placeholder="Meal Name" />
      <Input type="time" placeholder="Time" />
      <Button colorScheme="whatsapp">Save</Button>
    </VStack>
  );
}
