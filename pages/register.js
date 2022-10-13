import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = data;

    if (
      firstName === "" &&
      lastName === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setError("Please provide all the information");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password !== confirmPassword) {
      setError("password do not match");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
        data
      );
      router.push("/Login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="py-20 px-36 items-center justify-center bg-[url(/background1.jpg)] bg-cover object-cover bg-center bg-no-repeat">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block border-transparent">
          <img
            className="w-full h-full object-cover"
            src="images/background.jpg"
            alt=""
          />
        </div>
        <div className="flex bg-gradient-to-br from-cyan-100 to-blue-400 flex-col justify-center">
          <form onSubmit={handleSubmit} className="max-w-[400px] w-80 mx-auto">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-600">
              Register
            </h1>
            {error && <p>{error}</p>}
            <div className="flex flex-col text-gray-600 py-2">
              <label htmlFor="firstName" className="text-gray-600 font-bold">
                Firstname
              </label>
              <input
                className="mt-1 text-gray-800 border-b-2 bg-transparent focus:outline-none"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="lastName" className="text-gray-600 font-bold">
                Last name
              </label>
              <input
                className="mt-1 bg-transparent text-gray-800 border-b-2 focus:outline-none"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="email" className="font-bold text-gray-600">
                Email
              </label>
              <input
                className="text-gray-800 mt-1 bg-transparent border-b-2 focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="password" className="text-gray-600 font-bold">
                Password
              </label>
              <input
                className="mt-1 text-gray-800 border-b-2 focus:outline-none bg-transparent"
                type="password"
                id="Password"
                name="password"
                placeholder="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col py-2">
              <label
                htmlFor="confirmPassword"
                className="text-gray-600 font-bold"
              >
                Confirm password
              </label>
              <input
                className="mt-1 text-gray-800 border-b-2 focus:outline-none bg-transparent"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              className="rounded-md mt-4 py-2 px-4 bg-cyan-400 text-gray-600 hover:text-white font-bold  focus:bg-gray-100 focus:outline-none justify-items-center"
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
// import { useRouter } from 'next/router';

export default Register;
