import { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Box,
  Spinner,
  Divider,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { PatientContext } from "../contexts/PatientContext";

const LeftPanel = () => {
  const { patients, loading } = useContext(PatientContext);
  const [patientIndex, setPatientIndex] = useState(0);
  const currentPatient = patientIndex;
  const nextPatient = patientIndex + 1;

  function goNextPatient() {
    setPatientIndex(patientIndex + 1);
  }

  if (loading)
    return (
      <Center>
        <Spinner color="green" />
      </Center>
    );

  return (
    <Box bg="white" w="20%" p={4} color="white">
      <Card m={[2, 3]} w="100%" bg="#fefefe">
        <CardHeader>
          <Heading size="md" color="green">
            Current Patient
          </Heading>
        </CardHeader>
        <Center>
          <Divider bg="tomato" px="4" w="80%" />
        </Center>
        <CardBody>
          <Text pt="2" fontSize="sm">
            <strong>Name:</strong> {patients[currentPatient].name} <br />
            <strong>Email:</strong> {patients[currentPatient].email} <br />
            <strong>Mobile:</strong> {patients[currentPatient].mobile} <br />
            <strong>Address:</strong> {patients[currentPatient].address}
          </Text>
        </CardBody>
        <Center>
          <Divider color="green" bg="green" px="2" w="80%" />
        </Center>
        <CardFooter>
          <Button
            variant="solid"
            colorScheme="green" // TODO: Change color to #007F00
            w="100%"
            onClick={goNextPatient}
          >
            Next Patient
          </Button>
        </CardFooter>
      </Card>

      <Card m={[2, 3]} w="100%" pt="2">
        <CardHeader>
          <Heading size="md" color="green">
            Next Patient
          </Heading>
        </CardHeader>
        <Center>
          <Divider bg="green" px="4" w="80%" />
        </Center>
        <CardBody>
          <Text pt="2" fontSize="sm">
            <strong>Name:</strong> {patients[nextPatient].name} <br />
            <strong>Email:</strong> {patients[nextPatient].email} <br />
            <strong>Mobile:</strong> {patients[nextPatient].mobile} <br />
            <strong>Address:</strong> {patients[nextPatient].address}
          </Text>
        </CardBody>
        <Center>
          <Divider bg="green" px="4" w="80%" />
        </Center>
        <CardFooter>
          <Center>
            <Heading color="green" size="sm">
              Next Patient will show after this one.
            </Heading>
          </Center>
        </CardFooter>
      </Card>

      <Card m={[2, 3]} w="100%" pt="2">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "green", color: "white" }}>
                <Box as="span" flex="1" textAlign="left">
                  Harvest Products
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>Indica Dom</AccordionPanel>
            <AccordionPanel pb={4}>Sativa Dom</AccordionPanel>
            <AccordionPanel pb={4}>Hybrid</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </Box>
  );
};

export default LeftPanel;
