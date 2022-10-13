import React from "react";
import {getHospitals} from "../../Utils/getHospital"
import Link from "next/link";
    
export async function getStaticProps(){
  const hospitals = await getHospitals();

  return{
    props:{
      hospitals,
    },
  };
}


const Hostpitals= ({hospitals})=>{
  console.log(hospitals)
  return(
    <div>
      {hospitals?.map((hospital)=> (
       <p>
        <Link href={`/hospitals/${hospital._id}`}>
        {hospital.patientId}
        </Link>
        </p>
      )
      )}
    </div>
  )
}

export default Hostpitals