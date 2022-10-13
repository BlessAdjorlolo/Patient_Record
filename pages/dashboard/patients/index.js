import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { FcViewDetails } from 'react-icons/fc';
import "styled-jsx/css";
import Link from 'next/link';


function PatientList() {
  return (
    <div className="mt-10 px-7 flex flex-col">
      <div className="flex justify-between items-center p-4 text-xl font-bold">
        <h1>Patient Information</h1>
        <Link href="/hospitals/add-patient">
        <button className=" text-xl border-2 border-cyan-500 rounded-md px-7 py-2 inline-block font-bold text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200m">
        Add Patient
        </button>
        </Link>
      </div>
      <div className="PatientList px-7">
        <table>
          <thead>
            <tr>
              <th>Patient Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Sex</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Blood Type</th>
              <th>History</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5</td>
              <td>John</td>
              <td>Doe</td>
              <td>Male</td>
              <td>Date</td>
              <td>Number</td>
              <td>String</td>
              <td>Number</td>
              <td>O+</td>
              <td>String</td>
              <td>
                <div className="space-x-2">
                  <button className="bg-cyan-500 p-2 rounded-md text-gray-700">
                    <FcViewDetails height={24} color="gray" />
                  </button>
                  <button className="bg-gray-600 p-2 rounded-md">
                    <FaRegEdit height={24} color="white" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>John</td>
              <td>Doe</td>
              <td>Male</td>
              <td>Date</td>
              <td>Number</td>
              <td>String</td>
              <td>Number</td>
              <td>O+</td>
              <td>String</td>
              <td>
                <div className="space-x-2">
                  <button className="bg-cyan-500 p-2 rounded-md">
                    <FcViewDetails height={24} color="white" />
                  </button>
                  <button className="bg-gray-600 p-2 rounded-md">
                    <FaRegEdit height={24} color="white" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientList;
