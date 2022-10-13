import Link from "next/link";
import React, { useState } from "react";
import { usePatientContext } from "../../../context/patientContext";
import { getPatients } from "../../../Utils/getPatients";

export default function Patient() {
  const [patientId, setPatientId] = useState("");
  const { filterPatientList, foundPatient } = usePatientContext();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      filterPatientList(patientId);

      console.log(foundPatient);
      // setPatient(patient);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <section className=" bg-gray-100 py-10 mt-16 lg:mt-52" id="Search">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto sm:px-10">
          {error && <p>{error}</p>}
          <h2 className=" text-3xl text-cyan-500 text-center font-bold">
            Search for Records
          </h2>
          <p className=" text-gray-600 text-center text-lg mt-4">
            Enter a Patients name in the search box below and see his/her
            records pop up or click
            <Link href="/hospitals/add-patient"
              className="text-cyan-500 hover:text-cyan-600 transition-duration-200 ease-in-out font-semibold cursor-pointer hover:shadow-lg "
            > here
            </Link>
             to add new patient
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col sm:flex-row gap-6 mt-8">
              <input
                type="text"
                placeholder="Enter patient name"
                className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-500"
                name="patientId"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
              />
              <button
                type="submit"
                className=" btn rounded-md flex-1 text-white border-2 bg-cyan-500 hover:bg-white hover:text-cyan-500 hover:border-cyan-500 text-lg font-bold hover:border-2"
              >
                Search
              </button>
              {/* grid collection */}
            </div>
          </form>
          <div className="text-center mt-5 text-gray-400 w-full">
            {foundPatient ? (
              <Link
                href={{
                  pathname: `/dashboard/patients/${foundPatient._id}`,
                  data: {
                    patient: foundPatient,
                  },
                }}
              >
                <div>
                  <div className="max-w-sm grid grid-cols-3 bg-white rounded cursor-pointer py-2 divide-x mx-auto">
                    <div>{foundPatient?.patientId}</div>
                    <div>{foundPatient?.firstName}</div>
                    <div>{foundPatient?.lastName}</div>
                  </div>
                </div>
              </Link>
            ) : (
              <p>No Patient Found</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
