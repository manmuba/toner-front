"use client";

import Image from "next/image";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import { FiCheckCircle } from "react-icons/fi";

const LogOut = () => {
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
          <h1 className="text-white text-xl md:text-3xl">Well done!</h1>
        </div>
        <div className="flex-col px-5 pb-5 items-center justify-center">
          <div className="p-2 items-center flex justify-center w-[95%] mx-4 text-center flex-col">
            <Image
              className="h-[62px] w-[62px] my-3 rounded-full"
              height="64"
              width="64"
              alt="Avatar"
              src="/images/users/avatar-1.jpg"
            />
            <h6 className="text-[14px] text-neutral-500 font-normal">
              Thank you for using <span className="font-semibold">Toner</span>
            </h6>
          </div>
          <button className="mx-4 w-[95%] bg-blue-600 hover:bg-blue-500 transition delay-75 text-white p-2 rounded-md text-[14px]">
            Sign In
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogOut;
