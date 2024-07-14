/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const PatientContext = createContext();

const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_EXPRESS_API_URL}/api/patients`
        );
        setPatients(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <PatientContext.Provider value={{ patients, loading, error }}>
      {children}
    </PatientContext.Provider>
  );
};

export { PatientProvider, PatientContext };
