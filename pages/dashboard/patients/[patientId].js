import React, { useEffect, useState } from "react";
import PatientRecords from "../../../components/PatientRecords";
import { getPatients } from "../../../Utils/getPatients";
import { useRouter } from "next/router";
import { usePatientContext } from "../../../context/patientContext";

// export async function getStaticPaths() {
//     const res = await getHospitals();

//     const paths = res.map((hospital) => ({params: {patientId: String(hospital._id)}})
//     );

//     return {
//         paths,
//         fallback:true,
//     };
// }

export async function getServerSideProps(context) {
  const hospital = await getPatients(context.params.patientId);

  if (hospital) {
    return {
      props: {
        hospital,
      },
    };
  } else {
    return {
      props: {
        hospital: null,
      },
    };
  }
}

const PatientDetails = () => {
  const [patient, setPatient] = useState({});
  const { foundPatient } = usePatientContext();

  console.log(foundPatient);

  useEffect(() => {});

  return (
    <div className="p-7 h-screen">
      <h1 className="pt-10 text-2xl pb-4 text-center font-bold">
        <span className="text-cyan-500">Patient</span> Details
      </h1>
      <hr />
      <div className="grid grid-cols-3 cy-2">
        <div className="font-bold">Patient ID</div>
        <div className="col-span-2">{foundPatient.patientId}</div>
      </div>
      <div className="grid grid-cols-3 cy-1">
        <div className="font-bold">First Name</div>
        <div className="col-span-2">{foundPatient.firstName}</div>
      </div>
      <div className="grid grid-cols-3 cy-2">
        <div className="font-bold">Last Name</div>
        <div className="col-span-2">{foundPatient.lastName}</div>
      </div>
      <div className="grid grid-cols-3 cy-1">
        <div className="font-bold">Gender</div>
        <div className="col-span-2">{foundPatient.sex}</div>
      </div>
      <div className="grid grid-cols-3 cy-2">
        <div className="font-bold">Age</div>
        <div className="col-span-2">{foundPatient.age}</div>
      </div>
      <div className="grid grid-cols-3 cy-1">
        <div className="font-bold">Date Of Birth</div>
        <div className="col-span-2">{foundPatient.dateOfBirth}</div>
      </div>
      <div className="grid grid-cols-3 cy-2">
        <div className="font-bold">Contact</div>
        <div className="col-span-2">{foundPatient.contact}</div>
      </div>
      <div className="grid grid-cols-3 cy-1">
        <div className="font-bold">Address</div>
        <div className="col-span-2">{foundPatient.address}</div>
      </div>
      <div className="grid grid-cols-3 cy-2">
        <div className="font-bold">Blood Type</div>
        <div className="col-span-2">{foundPatient.bloodType}</div>
      </div>
      <div className="grid grid-cols-3 cy-1">
        <div className="font-bold gr">History</div>
        <div className="col-span-2">{foundPatient.history}</div>
      </div>
    </div>
  );
};

export default PatientDetails;
