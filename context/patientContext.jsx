import { createContext, useContext, useState } from "react";

export const PatientContext = createContext({
  patientList: [],
  foundPatient: null,
  setPatientList: () => {},
  filterPatientList: () => {},
  setFoundPatient: () => {},
});

export const PatientContextProvider = ({ children }) => {
  const [patientList, setPatientList] = useState([]);
  const [foundPatient, setFoundPatient] = useState({});

  const filterPatientList = (patientId) => {
    console.log(patientList);
    const patient = patientList.find((patient) =>
      patient.patientId.includes(patientId)
    );

    console.log(patient);
    setFoundPatient(patient);
  };

  return (
    <PatientContext.Provider
      value={{
        patientList,
        foundPatient,
        setPatientList,
        filterPatientList,
        setFoundPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => useContext(PatientContext);
