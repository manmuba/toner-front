"use client";

import Image from "next/image";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import { BsEyeSlashFill, BsEyeFill, BsGithub, BsTwitter } from "react-icons/bs";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className=" bg-neutral-200">
      <Header />
      <div className="flex w-[90vw] mx-[5vw] md:mx-[30vw] md:w-[40vw] rounded-lg mb-6 flex-col my-5 bg-white">
        <div className="flex bg-blue-600 w-full p-12 gap-12 rounded-t-lg">
          <Image
            width="200"
            height="200"
            alt="Image"
            src="/images/auth/img-1.png"
            className="w-[100px] md:w-[150px] lg:w-[200px]"
          />
          <h1 className="text-white text-xl md:text-3xl">
            Join Our Toner <br />
            Store
          </h1>
        </div>
        <div className="flex-col p-5 items-center justify-center">
          <h5 className="text-neutral-400 text-[14px] font-semibold">
            Sign in to continue to Toner.
          </h5>
          <h4 className="mx-4 mb-3 text-[14px] font-semibold mt-6">Username</h4>
          <input
            type="email"
            className="mx-4 p-2 px-5 w-[95%] outline-none focus:border-blue-500 border rounded-md"
            placeholder="Enter username"
          />
          <div className="flex items-center justify-between mx-4 mb-3 mt-4">
            <h4 className=" text-[14px] font-semibold">Password</h4>
            <span className="text-[13px] text-neutral-400 cursor-pointer">
              Forgot password?
            </span>
          </div>
          <input
            type={`${hide ? "password" : "text"}`}
            className="mx-4 p-2 px-5 w-[95%] outline-none focus:border-blue-500 border rounded-md"
            placeholder="Enter password"
          />
          <span
            className="relative left-[75vw] md:left-[34vw] bottom-7 text-neutral-600 cursor-pointer transition delay-75"
            onClick={() => {
              setHide(!hide);
            }}
          >
            {hide ? <BsEyeFill /> : <BsEyeSlashFill />}
          </span>
          <div className="flex items-center justify-start px-4 gap-2">
            <input type="checkbox" name="" id="" />
            <span className="text-[13px] font-medium">Remember me</span>
          </div>
          <button className="mx-4 my-4 w-[95%] bg-blue-600 hover:bg-blue-500 transition delay-75 text-white p-2 rounded-md text-[14px]">
            Sign In
          </button>
          <div className="flex items-center justify-center flex-col gap-4 mt-5">
            <h4 className="text-[14px] font-semibold">Sign In with</h4>
            <div className="flex gap-3 mb-10">
              <div className="border rounded-full text-blue-600 p-2 transition delay-75 cursor-pointer hover:text-white hover:bg-blue-600">
                <FaFacebook />
              </div>
              <div className="border rounded-full p-2 transition delay-75 cursor-pointer hover:bg-blue-200">
                <FcGoogle />
              </div>
              <div className="border rounded-full p-2 transition delay-75 cursor-pointer hover:text-white hover:bg-black">
                <BsGithub />
              </div>
              <div className="border rounded-full p-2 transition delay-75 text-blue-500 cursor-pointer hover:text-white hover:bg-blue-400">
                <BsTwitter />
              </div>
            </div>
            <h4 className="text-[14px] font-medium mb-4">
              Don't have an account ?{" "}
              <span className="text-blue-600 underline cursor-pointer font-semibold text-[14px]">
                SignUp
              </span>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
