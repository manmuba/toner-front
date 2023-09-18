"use client";

import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import ColsForHome from "../Components/ColsForHome";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";

const TrackOrder = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-row items-center justify-start px-8 py-6 md:px-[12.5vw] bg-blue-500">
        <h1 className="text-white text-[20px] font-medium">Track Order</h1>
      </div>
      <div className="w-full md:w-[75vw] md:ml-[12.5vw] my-10">
        <h2 className="text-[16px] underline font-bold">Order ID #KSHA37S9</h2>
        <div className="grid grid-cols-4 items-center justify-around pt-8">
          <div className="flex flex-col justify-center items-center text-green-500 text-[28px] gap-1">
            <BsFillCheckCircleFill />
            <span className="mt-3 text-[13px] font-semibold text-black">
              Order Process
            </span>
            <p className="text-[12px] font-light text-neutral-400">
              Mon, 23 Nov
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-green-500 text-[28px] gap-1">
            <BsFillCheckCircleFill />
            <span className="mt-3 text-[13px] font-semibold text-black">
              Order Shipped
            </span>
            <p className="text-[12px] font-light text-neutral-400">
              Mon, 23 Nov
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-neutral-400 text-[28px] gap-1">
            <BsFillCheckCircleFill />
            <span className="mt-3 text-[13px] font-semibold text-black">
              Out of Delivery
            </span>
            <p className="text-[12px] font-light text-neutral-400">
              Mon, 23 Nov
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-neutral-400 text-[28px] gap-1">
            <BsFillCheckCircleFill />
            <span className="mt-3 text-[13px] font-semibold text-black">
              Delivered
            </span>
            <p className="text-[12px] font-light text-neutral-400">
              Mon, 23 Nov
            </p>
          </div>
        </div>
        <div className="border-dashed border-gray-300 border-[1px] rounded-md">
          <div className="w-full md:w-[60vw] mt-20 h-56 grid grid-cols-2 md:grid-cols-4 ">
            <div className="flex flex-col md:ml-[5vw] ">
              <p className="text-[12px] font-light text-neutral-400">
                ORDER ID
              </p>
              <h4 className="text-[13px] font-bold">#KSHA37S9</h4>
            </div>
            <div className="flex flex-col md:ml-[5vw]">
              <p className="text-[12px] font-light text-neutral-400">DATE</p>
              <h4 className="text-[13px] font-bold">23 Nov, 2021</h4>
            </div>
            <div className="flex flex-col md:ml-[5vw]">
              <p className="text-[13px] font-light text-neutral-400">
                PAYMENT STATUS
              </p>
              <h4 className="text-[8px] badge bg-success-subtle text-success font-semibold w-20 fs-11">
                Paid
              </h4>
            </div>
            <div className="flex flex-col md:ml-[5vw]">
              <p className="text-[12px] font-light text-neutral-400">
                TOTAL AMOUNT
              </p>
              <h4 className="text-[13px] font-bold">#KSHA37S9</h4>
            </div>
            <div className="flex flex-col  md:ml-[5vw] mt-3">
              <p className="text-[11px] font-semibold text-neutral-400">
                BILLING ADDRESS
              </p>
              <h4 className="text-[13px] font-bold">Name</h4>
              <p className="text-[12px] text-neutral-400 relative bottom-1">
                305 S San
              </p>
              <p className="text-[12px] text-neutral-400 relative bottom-4">
                305 S San
              </p>
              <p className="text-[12px] text-neutral-400 relative bottom-7">
                305 S San
              </p>
            </div>
          </div>
        </div>
      </div>
      <ColsForHome />
      <Footer />
    </div>
  );
};

export default TrackOrder;
