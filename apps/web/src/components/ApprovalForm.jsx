import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Center,
  Button,
  useDisclosure,
  Slide,
  FormControl,
  CloseButton,
  Flex,
  Input,
  Spacer,
  Select,
  CardFooter,
} from "@chakra-ui/react";

const ApprovalForm = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Center>
      <Card m={[2, 3]} w="100%">
        <CardHeader>
          <Center>
            <Heading size='sm' color="green">
              Patient Approval / Rejection
            </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Button 
            colorScheme="green"
            w="100%"
            onClick={ onToggle }
          >
            Approval Form
          </Button>
          
            <Slide direction='bottom' in={ isOpen } offsetY='20px' style={{ zIndex: 10 }}>
              <Box
                p='10px'
                color='black'
                mt='4'
                bg='white'
                border='1px solid green'
                rounded='md'
                shadow='md'
              >
                <FormControl as="fieldset">
                  <CloseButton onClick={onToggle} />
                  <Card>
                    <CardHeader>
                      <Heading size="md">Approve Patient</Heading>
                      <CardBody>
                        <Flex>
                          <Input w="78%" placeholder="3.5" />
                          <Spacer />
                          <Select w="20%" placeholder="grams" size="md">
                            <option value="milligrams">milligrams</option>
                          </Select>
                        </Flex>
                        <Select pt="2" pb="2" placeholder="22% THC" size="md">
                          <option value="29% THC">29% THC</option>
                        </Select>
                        <Input placeholder="Duration..." />
                      </CardBody>
                      <CardFooter>
                        <Button w="49%" colorScheme="green" size="md">
                          Approve
                        </Button>
                        <Spacer />
                        <Button w="49%" colorScheme="red" size="md">
                          Reject
                        </Button>
                      </CardFooter>
                    </CardHeader>
                  </Card>
                </FormControl>
              </Box>
            </Slide>
        </CardBody>
      </Card>
    </Center>
  )
}

export default ApprovalForm