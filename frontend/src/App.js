import {VStack} from "@chakra-ui/react"
import './App.css';
import Header from "./components/Header";
import Login from './Login';
import Signup from "./Signup";
import Dashboard from "./User/Dashboard";

function App() {

  //justifyContent="center" h="100vh" border="2px solid black"

  return (
    <VStack w="100vw" h="100vh">
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Header /> */}
      <Dashboard />
    </VStack>
  );
}

export default App;
