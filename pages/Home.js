import React from 'react'
import Link from 'next/link';

const Home = () => {
  return (
    <div className="h-screen">
      <div className="shadow-sm pt-5">
        <nav className="flex justify-between px-4 py-3 max-w-7xl mx-auto">
          <div className="flex items-center uppercase font-bold text-2xl">
            <h1 className="text-gray-700 w-full">
              <span className="text-cyan-500">Patient</span> Record
            </h1>
          </div>
          <ul className="flex gap-10 cursor-pointer  text-gray-700 px-14 ">
            <Link href="/dashboard">
              <li className="text-xl font-bold justify-around hover:text-cyan-500">
                Dashboard
              </li>
            </Link>
            <Link href="/">
              <li className="text-lg font-bold hover:text-cyan-500">
                Logout
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 mt-14 lg:mt-28 ">
        <div className="px-7 flex flex-1 flex-col items-center lg:items-center">
          <h2 className=" text-3xl text-cyan-500 md:text-4xl font-bold lg:text-5xl text-center lg:text-left mb-6">
            Empowering even the poor countries to establish an Electronic
            hospital record for effiecient health care service
          </h2>
          <p className="text-lg font-semibold text-center lg:text-left mb-6 text-gray-600">
            A digitalized hospital records. We offer you paperless patient
            record. By click you can view, edit and add a patient's record using
            your computer.
          </p>
        </div>

        <div className=" flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
          <img
            src="./images/Background.jpg"
            height={500}
            width={500}
            className=" w-5/6 h-5/6 sm:h-3/4 "
            alt="Patient Record"
          />
        </div>
      </div>
    </div>
  );
}

export default Home
