import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { PatientProvider } from "./contexts/PatientContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AuthProvider>
      <PatientProvider>
        <App />
      </PatientProvider>
    </AuthProvider>
  </ChakraProvider>
);
