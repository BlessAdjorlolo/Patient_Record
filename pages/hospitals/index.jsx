import React from "react";
import { getPatients } from "../../Utils/getPatients";
import Link from "next/link";

export async function getServerSideProps() {
  const hospitals = await getPatients();

  return {
    props: {
      hospitals,
    },
  };
}

const Hostpitals = ({ hospitals }) => {
  console.log(hospitals);
  return (
    <div>
      {hospitals?.map((hospital, idx) => (
        <p key={idx}>
          <Link href={`/hospitals/${hospital._id}`}>{hospital.patientId}</Link>
        </p>
      ))}
    </div>
  );
};

export default Hostpitals;
