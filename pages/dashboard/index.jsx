import React, { useEffect } from "react";
import { usePatientContext } from "../../context/patientContext";
import { getPatients } from "../../Utils/getPatients";

export async function getServerSideProps() {
  const patients = await getPatients();

  return {
    props: {
      patients,
    },
  };
}

const Dashboard = ({ patients }) => {
  const { setPatientList } = usePatientContext();

  useEffect(() => {
    setPatientList(patients);
  }, []);

  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 mt-14 lg:mt-28 ">
        <div className="px-7 flex flex-1 flex-col items-center lg:items-center">
          <h2 className=" text-3xl text-cyan-500 md:text-4xl font-bold lg:text-5xl text-center lg:text-left mb-6">
            The world is going digital so should our health related too
          </h2>
          <p className="text-lg font-semibold text-center lg:text-left mb-6 text-gray-600">
            Ensuring easy accessibility and prevent patient delay. We present to
            an era of elctronic patient record
          </p>
        </div>

        <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            src="/background2.jpeg"
            height={600}
            width={500}
            className=" w-5/6 h-5/6 sm:h-3/4 "
            alt="Patient Record"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 mt-14 lg:mt-28 ">
        <div className="px-7 flex flex-1 flex-col items-center lg:items-center">
          <h2 className=" text-3xl text-cyan-500 md:text-4xl font-bold lg:text-5xl text-center lg:text-left mb-6">
            The world is going digital so should our health related be too
          </h2>
          <p className="text-lg font-semibold text-center lg:text-left mb-6 text-gray-600">
            Ensuring easy accessibility and prevent patient delay. We present to you
            an era of elctronic patient record
          </p>
        </div>

        <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            src="/background2.jpeg"
            height={500}
            width={500}
            className=" w-5/6 h-5/6 sm:h-3/4 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
