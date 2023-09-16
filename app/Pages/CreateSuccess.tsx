"use client";

import Image from "next/image";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import { FiCheckCircle } from "react-icons/fi";

const CreateSuccess = () => {
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
        <div className="flex-col p-5 items-center justify-center">
          <div className="p-2 items-center flex justify-center w-[95%] mx-4 text-center mt-4 flex-col">
            <div className="flex items-center p-3 rounded-sm alert alert-borderless alert-success text-center mt-4">
              <FiCheckCircle className="text-green-600 text-[20px]" />
            </div>
            <h6 className="text-[14px] text-neutral-500">
              Password has been successfully changed
            </h6>
          </div>
          <button className="mx-4 w-[95%] bg-green-600 hover:bg-green-500 transition delay-75 text-white p-2 rounded-md text-[14px]">
            Back to DashBoard
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateSuccess;
