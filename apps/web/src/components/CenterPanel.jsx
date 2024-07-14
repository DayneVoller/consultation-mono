import { useEffect, useRef } from "react";
import { 
  Center,
  Box, 
  Card, 
  CardHeader, 
  Heading, 
} from "@chakra-ui/react";

const roomUrl = "https://harvest-consult-test.daily.co/consultation-room"; 

const CenterPanel = () => {
  const dailyCallContainerRef = useRef(null);

  useEffect(() => {
    const dailyIframe = document.createElement('Iframe');
    dailyIframe.src = roomUrl;
    dailyIframe.allow = "camera; microphone; fullscreen; location";
    dailyIframe.style.width = "100%";
    dailyIframe.style.height = "80vh";
    
    if (dailyCallContainerRef.current) {
      dailyCallContainerRef.current.appendChild(dailyIframe);
    }
  }, [])

  return (
    <Box bg="white" w="60%" h="100%" p={4} color="white">
      <Center>
        <Card m={[2, 3]} w="100%">
          <CardHeader>
            <Heading size="md" color="green">Zenith Clinic Consultation</Heading>
          </CardHeader>
        </Card>
      </Center>
      <Box
        ref={ dailyCallContainerRef } 
      />
    </Box>
  )
}

export default CenterPanel;