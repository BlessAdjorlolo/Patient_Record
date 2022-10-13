import React, {useState} from 'react'
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from "react-icons/fa"
import{MdLockOutline} from "react-icons/md"
import {GoFileDirectory} from "react-icons/go"
import {signIn} from "next-auth/react";
import { useRouter } from 'next/router';
import Link from 'next/link';


const Login = () => {
  const[data, setData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const router = useRouter()

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const result = await signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl: "/"
    });
    if (result.error) {
      setError(result.error)
    } else{
      router.push("/dashboard")
    }

  };
  return (
    // <div className="">
    <div className="flex flex-col bg-gray-100 bg-[url(/images/background.jpg)] bg-cover object-cover bg-center bg-no-repeat justify-center items-center text-center w-full px-20 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl flex w-3/5 max-w-4xl ">
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-cyan-500">Patient</span>Record
          </div>
          <div className="flex justify-center mt-7">
            <a href="#" className="mt-3">
              <GoFileDirectory className="text-7xl text-gray-500" />
            </a>
          </div>
          <div className="py-3">
            <h2 className="text-3xl font-bold text-cyan-500 mb-2">
              {" "}
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-cyan-500 inline-block mb-2"></div>
            <form onSubmit={handleSubmit}>
              {error && <p>{error}</p>}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-300 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-300 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-300 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">Or use your email account</p>
              <div className="flex flex-col items-center">
                <div className=" w-64 p-2 flex items-center mb-4 rounded-md border-b-2">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" outline-none text-sm flex-1"
                    value={data.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-64 p-2 flex items-center rounded-md border-b-2">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="outline-none text-sm flex-1"
                    value={data.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-2 flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="border-2 border-cyan-500 rounded-lg px-12 py-2 inline-block font-semibold text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200m"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-cyan-400 rounded-tr-2xl rounded-br-2xl py-36 px-12 w-2/5">
          <h2 className="text-3xl font-bold mb-2">Welcome to Patient Record</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Fill up personal information to start</p>
          <Link href="/register">
          <button
            type="submit"
            className="border-2 rounded-lg px-7 py-2 inline-block font-semibold border-white text-xl text-white hover:bg-white hover:text-cyan-500 duration-200m"
          >
              Sign Up
          </button>
          </Link>
        </div>
      </div>
    </div>
  // </div>
  );
}

export default Login;