import { VStack, Heading, Select, HStack, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Greetings from "../components/Greetings";
import Header from "../components/Header";
import MealsList from "../components/MealsList";

export default function Dashboard() {
  return (
    <VStack h="100%" w="100%" spacing="5">
      <Header />
      <Greetings />
      <Heading>Meal Records</Heading>
      <HStack spacing="5" w="60%">
        <Text>Filter: </Text>
        <Select size="sm">
        <option>All</option>
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </Select>
        <Button colorScheme="facebook">Search</Button>
      </HStack>
      
      <MealsList />
      <Footer />
    </VStack>
  );
}
