import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";

const ConfirmPrescriptionHistory = () => {
  return (
    <Center>
        <Card m={[2, 3]} w="100%">
          <CardHeader>
            <Center>
              <Heading size='sm' color="green">
                Confirm patient prescriptions history 
              </Heading>
            </Center>           
          </CardHeader>
          <CardBody>
            <Text>
              <a 
                target="_blank"
                href="https://register.safescript.health.nsw.gov.au/">
                  Register as a medical practitioner with SafeScripts here
              </a> 
            </Text>
            <Text>OR</Text>
            <Text>
              <a 
                color="green"
                target="_blank" 
                href="https://proda.humanservices.gov.au/pia/pages/public/registration/account/createAccount.jsf">
                  Register as a medical practitioner with MyHealth
              </a>
            </Text>
          </CardBody>
        </Card>
      </Center>
  )
}

export default ConfirmPrescriptionHistory;