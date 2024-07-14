import {
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Box,
  AbsoluteCenter,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { signIn, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/home");
  }, [navigate, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <Flex h="100vh" w="100vw">
      <Box bg="white" w="50%" p={4} color="white">
        <AbsoluteCenter>
          <Card m={[2, 3]} w="100%" bg="#fefefe">
            <CardHeader>
              <Heading size="md" color="green">
                Login to Zenith Clinic Consultations
              </Heading>
            </CardHeader>
            <Center>
              <Divider bg="black" px="4" w="80%" />
            </Center>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email address"
                  />
                  <FormLabel pt="4">Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    mb="4"
                  />
                  <Button
                    variant="solid"
                    colorScheme="green" // TODO: Change color to #007F00 - update theme
                    w="100%"
                    type="Submit"
                  >
                    Login
                  </Button>
                </FormControl>
              </form>
            </CardBody>
            <CardFooter>{/* TODO: Add registration link... */}</CardFooter>
            <Center>
              <Divider color="green" bg="green" px="2" w="80%" />
            </Center>
          </Card>
        </AbsoluteCenter>
      </Box>
    </Flex>
  );
};

export default Login;
