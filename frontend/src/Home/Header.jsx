import { Heading, HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HStack justifyContent="space-between" w="100%" px="5" mb="5">
      <HStack as={NavLink} to="/">
        <Image src={logo} boxSize="25px" alt="logo" />
        <Heading>MealCheck</Heading>
      </HStack>
      <Link as={NavLink} to="/" fontWeight="600">
        Home
      </Link>
    </HStack>
  );
}
