import { Box } from "@chakra-ui/react";
import ConfirmPrescriptionHistory from "./ConfirmPrescriptionHistory";
import PatientId from "./PatientId";
import MedicalQuestionsModel from "./MedicalQuestionsModel";
import ApprovalForm from "./ApprovalForm";

const RightPanel = () => {
  return (
    <Box 
      bg="white" 
      w="20%" 
      p={4} 
      color="white"
    >
      <ConfirmPrescriptionHistory />
      <PatientId />
      <MedicalQuestionsModel />
      <ApprovalForm />
    </Box>
  )
}

export default RightPanel;