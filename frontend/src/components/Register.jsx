import {
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import api from "../api/serverData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRegisterSchema } from "../utils/validators";
import { NavLink } from "react-router-dom";

export default function Register() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  });

  const handleFormSubmit = async (data) => {
    try {
      console.log(data);
      const response = await api.post("/user/register", data);
      console.log(response);
      toast({
        variant: "subtle",
        description: response.data.msg,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      toast({
        variant: "subtle",
        description: err.response.data.err,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing="2rem" p="3rem" boxShadow="lg" maxWidth="70%">
      <Heading>Register</Heading>
      <Text>Already registered? <Text as={NavLink} to="/login" color="blue.600"><u>Login</u></Text></Text>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl isRequired className="form-items" isInvalid={errors.name}>
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="Full name" {...register("name")} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired className="form-items" isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          className="form-items"
          isInvalid={errors.password}
        >
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button colorScheme="facebook" type="submit" w="100%" mt="1rem">
          Register
        </Button>
      </form>
    </VStack>
  );
}
