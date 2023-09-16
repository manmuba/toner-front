"use client";

import Image from "next/image";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "bootstrap/dist/css/bootstrap.css";
import { GoHomeFill } from "react-icons/go";

const Page404 = () => {
  return (
    <div className=" bg-neutral-200">
      <Header />
      <div className="flex w-[90vw] mx-[5vw] md:mx-[30vw] md:w-[40vw] rounded-lg mb-6 flex-col my-5 bg-white">
        <div className="flex w-full p-12 gap-12 rounded-t-lg items-center justify-center">
          <Image
            width="200"
            height="200"
            alt="Image"
            src="/images/error400.png"
            className="w-[120px] md:w-[180px] lg:w-[250px]"
          />
        </div>
        <div className="flex-col px-5 pb-5 items-center justify-center">
          <div className="p-2 items-center flex justify-center w-[95%] mx-4 text-center flex-col">
            <h2 className="text-[18px] font-bold pb-3">OOPS, PAGE NOT FOUND</h2>
            <h6 className="text-[14px] text-neutral-500 font-medium">
              It will be a simple Occidental in fact, it will Occidetal to an
              Demo <br />
              person
            </h6>
            <button className="mt-4 flex flex-row items-center justify-center gap-2 mx-4 w-[55%] bg-blue-600 hover:bg-blue-500 transition delay-75 text-white p-2 rounded-md text-[14px]">
              <GoHomeFill size="20" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
