import { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Center,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
} from "@chakra-ui/react";

const MedicalQuestionsModel = () => {
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Center>
      <Card m={[2, 3]} w="100%">
          <CardHeader>
            <Center>
              <Heading size='sm' color="green">
                Patient Medical Questionnaire 
              </Heading>
            </Center>           
          </CardHeader>
          <CardBody>
            <Button 
              mt={ 3 }
              colorScheme="green"
              w="100%"
              ref={ btnRef } 
              onClick={ onOpen} 
            >
              View Patient Questionnaire
            </Button>

            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Medical Questions</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Center>
                  <Card pt={ 4 } w='100%'>
                    <Text color="green" size="sm" ml="5">What was your gender at birth?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">What prescription or non-prescription medications do you take, including doses (if any)?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">What allergies do you have (if any)?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">What condition or symptom are you having issues with?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Are you planning to have children in the near future?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Do you suffer from psychosis, bipolar disorder or schizophrenia?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Do you suffer from any cardiovascular diseases, including irregular heartbeat (arrhythmia)?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Do you have an addiction to any psychoactive substances and/or drugs, including alcohol, but excluding nicotine and caffeine?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Please add the first medication, treatment or therapy you trialled.</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Please add the second medication, treatment or therapy you trialled.</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Have you discussed other treatment options with your doctor? Including medical and conservative therapies.</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Knowing the alternative management options, do you still want to trial Alternative Medicine as a treatment option for your condition?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Are you aware of how Alternative Medicine can potentially affect your ability to operate machinery, equipment, and vehicles (including trains, planes and automobiles)?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Does your workplace require you to undertake drug screening?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Do you feel that you know enough about the short and long term side effects of alternative medicine?</Text>
                    <Text color="black" size="sm" ml="5">Patient Answer</Text>
                    <Center>
                      <Divider m="5" bg='black' px='4' w="100%"/>
                    </Center>
                    <Text color="green" size="sm" ml="5">Have you used Alternative Medicines before, whether for medicinal reasons or otherwise?</Text>
                    <Text color="black" size="sm" ml="5" mb="5">Patient Answer</Text>
                  </Card>
                </Center>
              </ModalBody>
              <ModalFooter>
                <Button onClick={ onClose }>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </CardBody>
      </Card>
    </Center>
  )
}

export default MedicalQuestionsModel;