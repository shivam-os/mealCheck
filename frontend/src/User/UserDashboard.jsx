import {
  VStack,
  Heading,
  Select,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Greetings from "../components/Greetings";
import Header from "../components/DashboardHeader";
import MealForm from "../components/MealForm";
import MealsList from "../components/MealsList";
import UsersList from "../components/UsersList";
import MealCard from "../components/MealCard";

export default function UserDashboard() {
  return (
    <VStack h="100%" w="100%" spacing="5">
      <Greetings />
      <Text>14-4-2023</Text>
      <MealCard />
      <MealCard />
      <MealCard />
      <Text fontSize="2xl" fontWeight="600">
        Meal Records
      </Text>
      <MealsList />
    </VStack>
  );
}
