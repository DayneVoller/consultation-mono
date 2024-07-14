import { fakeId } from "./fakeID";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverCloseButton,
  Button,
  Portal,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";

const PatientId = () => {
  const initRef = useRef();

  return (
    <Center>
      <Card m={[2, 3]} w="100%">
        <CardHeader>
          <Center>
            <Heading size='sm' color="green">
              Patient Identification
            </Heading>
          </Center>
        </CardHeader>
        <CardBody>
          <Popover closeOnBlur={false} placement='left' initialFocusRef={ initRef }>
            {({ isOpen, onClose }) => (
              <>
                <PopoverTrigger>
                  <Button
                    colorScheme="green"
                    w="100%"
                  >
                    Click to {isOpen ? 'close' : 'view ID'}
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverHeader>Identification for Current Patient</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Box>
                        <Center>
                          <Image
                            size="md"
                            src={ fakeId }
                          />
                        </Center>
                      </Box>
                    </PopoverBody>
                    <PopoverFooter>
                      <Button
                        mt={4}
                        colorScheme='green'
                        w="100%"
                        onClick={ onClose }
                        ref={ initRef }
                      >
                        Close
                      </Button>
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </>
            )}
          </Popover>
        </CardBody>
      </Card>
    </Center>
  )
}

export default PatientId