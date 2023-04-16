import { HStack, Heading, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <HStack justifyContent="space-between" w="100%" px="5" py="3" mb="5">
      <HStack as={NavLink} to="/">
        <Image src={logo} boxSize="25px" alt="logo" />
        <Heading>MealCheck</Heading>
      </HStack>
      <Text fontWeight="600">Logout</Text>
    </HStack>
  );
}
