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

const Register = () => {
  return (
    <Flex h="100vh" w="100vw">
      <Box bg="white" w="50%" p={4} color="white">
        <AbsoluteCenter>
          <Card m={[2, 3]} w="100%" bg="#fefefe">
            <CardHeader>  
              <Heading size="md" color="green">Login to Zenith Clinic Consultations</Heading>
            </CardHeader>
            <Center>
              <Divider bg='black' px='4' w="80%"/>
            </Center>
            <CardBody>  
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Email address' />
                <FormLabel pt="4">Password</FormLabel>
                <Input type='password' placeholder='Password' mb='4' />
                <FormLabel pt="4">Confirm Password</FormLabel>
                <Input type='password' placeholder='Confirm Password' mb='4' />
                <Button
                  variant="solid"
                  colorScheme="green" // TODO: Change color to #007F00
                  w="100%"
                  type="Submit"
                >
                  Register
                </Button>
              </FormControl>
            </CardBody>
            <CardFooter>
              {/* TODO: Add registration link... */}
            </CardFooter>
            <Center>
              <Divider color="green" bg='green' px='2' w="80%"/>
            </Center>
          </Card>
        </AbsoluteCenter>
      </Box>
    </Flex>
  )
}

export default Register;