import axios from "axios";

export const getPatients = async (patientId) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/hospitals`
  );
  const hospitals = await res.data.hospitals;

  if (patientId) {
    const hospital = hospitals.find(
      (hospital) => hospital.patientId == patientId
    );
    return hospital;
  }

  return hospitals;
};
