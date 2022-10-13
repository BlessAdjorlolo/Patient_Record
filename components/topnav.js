import React from 'react'
import Link from "next/link"

const Topnav = () => {
  return (
    <div className="shadow-sm pt-5">
      <nav className="flex justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center uppercase font-bold text-2xl">
          <h1 className="text-gray-700 w-full">
            <span className="text-cyan-500">Patient</span> Record
          </h1>
        </div>
        <ul className="flex gap-10 cursor-pointer  text-gray-700 px-14 ">
          <Link href="/">
            <li className="text-xl uppercase font-bold justify-around hover:text-cyan-500">
              Home
            </li>
          </Link>
          <Link href="/Login">
            <li className="text-lg uppercase font-bold hover:text-cyan-500">
              Login
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Topnav;