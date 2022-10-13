import {React, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios"

const AddPatient= () => {
  const [data,setData] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    dateOfBirth: "",
    age: "",
    address: "",
    patientId: "",
    contact: "",
    history: "",
    bloodGroup: "",
  })


    const [error, setError] =useState("");
    const router = useRouter();

    const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      
      try {
        const res = await axios.post(`http://localhost:3000/api/hospitals`,
        data,
        );
        console.log(res)
        router.push("/hospitals")
      } catch (error) {
        setError(error.massage);
      }
    }

  return (
      <>
        <div>
          {error && <p>{error}</p>}
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">
                          Patient ID
                        </label>
                        <input
                          type="text"
                          name="patientId"
                          id="patientId"
                          autoComplete="given-id"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={data.patientId}
                        onChange={handleChange}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={data.firstName}
                          onChange={handleChange}/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          autoComplete="family-name"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={data.lastName}
                          onChange={handleChange}/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          id="date"
                          autoComplete="date"
                          className="mt-1 block w-full  py-2 px-3 rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                          value={data.dateOfBirth}
                          onChange={handleChange}/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                        <label htmlFor="country" className="text-sm font-medium text-gray-700">
                          Sex
                        </label>
                        <select
                          id="sex"
                          name="sex"
                          autoComplete="sex"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                          value={data.sex}
                          onChange={handleChange}>
                          <option value="">-------- Select Gender --------</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                           <label htmlFor="age" className="text-sm font-medium text-gray-700">
                          Age
                        </label>
                        <input
                          type="number"
                          name="age"
                          id="age"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-cyan-500 focus:cyan-500 sm:text-sm"
                          value={data.age}
                          onChange={handleChange}/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          autoComplete="address"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                          value={data.address}
                          onChange={handleChange}/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                          Contact
                        </label>
                        <input
                          type="tel"
                          name="contact"
                          id="contact"
                          autoComplete="contact"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                          value={data.contact}
                          onChange={handleChange}/>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          Blood Group
                        </label>
                        <input
                          type="text"
                          name="bloodType"
                          id=""
                          autoComplete="bloodType"
                          className="mt-1 block w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          value={data.bloodType}
                          onChange={handleChange}/>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">History</h3>
              <p className="mt-1 text-sm text-gray-600">Please enter patients' medical diagnosis</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                 <label className="text-white">Message</label>
                  <textarea className="focus:outline-none w-full"
                    rows="6"
                    placeholder="Enter message..."
                    required
                    name="history"
                    value={data.history}
                    onChange={handleChange}></textarea>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-cyan-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  };

  export default AddPatient