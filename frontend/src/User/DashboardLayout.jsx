import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import DashboardHeader from "../components/DashboardHeader";

export default function DashboardLayout() {
  return (
    <VStack w="100%" h="100%" justifyContent="space-between">
      <DashboardHeader />
      <Outlet />
      <Footer />
    </VStack>
  );
}
