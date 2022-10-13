import React from "react";

// export async function getStaticPaths() {
//     const res = await getHospitals();

//     const paths = res.map((hospital) => ({params: {patientId: String(hospital._id)}})
//     );

//     return {
//         paths,
//         fallback:true,
//     };
// }

// export async function getStaticProps(context) {
//     const hospital = await getHospitals(context.params.patientId);
//     return{
//         props:{
//             hospital,
//         },
//     }
// }

const PatientRecords = ({ patient }) => {
  return (
    <div>
      <h1>PatientRecords</h1>
      <hr />
      <div className="grid grid-cols-3">
        <div className="font-bold">Patient ID</div>
        <div className="col-span-2">{patient.patientId}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">First Name</div>
        <div className="col-span-2">{patient.firstName}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Last Name</div>
        <div className="col-span-2">{patient.lastName}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Gender</div>
        <div className="col-span-2">{patient.sex}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Age</div>
        <div className="col-span-2">{patient.age}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Date Of Birth</div>
        <div className="col-span-2">{patient.dateOfBirth}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Contact</div>
        <div className="col-span-2">{patient.contact}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Address</div>
        <div className="col-span-2">{patient.address}</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="font-bold">Blood Type</div>
        <div className="col-span-2">{patient.bloodType}</div>
      </div>
    </div>
  );
};

export default PatientRecords;
