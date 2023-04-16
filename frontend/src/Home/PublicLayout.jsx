import Header from "./Header";
import Footer from "../components/Footer";
import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <VStack w="100%" h="100%" my="5" justifyContent="space-between">
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  );
}
