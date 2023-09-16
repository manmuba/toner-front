"use client";

import Image from "next/image";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useState } from "react";

const CreatePassword = () => {
  const [hide, setHide] = useState(true);
  const [hide1, setHide1] = useState(true);
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
            Create New Password
          </h1>
        </div>
        <div className="flex-col p-5 items-center justify-center">
          <h5 className="text-neutral-400 text-[14px] font-semibold px-2">
            Your new password must be different from previous used password.
          </h5>

          <div className="flex items-center justify-between mx-4 mb-3 mt-4">
            <h4 className=" text-[14px] font-semibold">Password</h4>
          </div>
          <input
            type={`${hide1 ? "password" : "text"}`}
            className="mx-4 p-2 px-5 w-[95%] outline-none focus:border-blue-500 border rounded-md"
            placeholder="Enter password"
          />
          <span
            className="relative left-[75vw] md:left-[32vw] bottom-7 text-neutral-600 cursor-pointer transition delay-75"
            onClick={() => {
              setHide1(!hide1);
            }}
          >
            {hide1 ? <BsEyeFill /> : <BsEyeSlashFill />}
          </span>
          <div className="flex items-center justify-between mx-4 mb-3 mt-4">
            <h4 className=" text-[14px] font-semibold">Confirm Password</h4>
          </div>
          <input
            type={`${hide ? "password" : "text"}`}
            className="mx-4 p-2 px-5 w-[95%] outline-none focus:border-blue-500 border rounded-md"
            placeholder="Confirm password"
          />
          <span
            className="relative left-[75vw] md:left-[32vw] bottom-7 text-neutral-600 cursor-pointer transition delay-75"
            onClick={() => {
              setHide(!hide);
            }}
          >
            {hide ? <BsEyeFill /> : <BsEyeSlashFill />}
          </span>

          <button className="mx-4 my-4 w-[95%] bg-blue-600 hover:bg-blue-500 transition delay-75 text-white p-2 rounded-md text-[14px]">
            Reset Password
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePassword;
