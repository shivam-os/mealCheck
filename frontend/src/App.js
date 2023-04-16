import { VStack } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import UserDashboard from "./User/UserDashboard";
import PublicLayout from "./Home/PublicLayout";
import DashboardLayout from "./User/DashboardLayout";
import HeroSection from "./Home/HeroSection";
import Register from "./components/Register";
import AdminDashboard from "./User/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "user",
        element: <UserDashboard />,
      },
      {
        path: "admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

function App() {
  //justifyContent="center" h="100vh" border="2px solid black"

  return (
    <VStack w="100vw" h="100vh">
      <RouterProvider router={router} />
    </VStack>
  );
}

export default App;
