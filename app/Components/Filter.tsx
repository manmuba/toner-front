'use client';

import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Filter = () => {
  return (
    <div className='flex items-center w-[80vw] md:w-[25vw] flex-col rounded-md md:ml-[6vw]'>
      <div className='border rounded-t-md w-[100%] p-5 '>
        <div className="py-3 flex items-center justify-between w-[100%]">
          <h4 className='font-semibold text-[14px]'>Filters</h4>
          <span className='text-[12px] text-blue-500 underline cursor-pointer'>Clear All</span>
        </div>
        <input type="text" placeholder='Search Products...' className='border rounded p-1 focus:border-blue-400 outline-none px-6 w-[100%] text-neutral-800' />
      </div>
      <div className='border w-full mt-0 px-6 pb-3'>
        <h5 className='text-neutral-500 w-full text-[12px] my-3 font-medium'>PRODUCTS</h5>
        <h5 className='text-neutral-800 font-semibold w-full text-[13px] my-1'>Grocery</h5>
        <h5 className='text-neutral-800 font-semibold w-full text-[13px] my-1'>Fashion</h5>
        <h5 className='text-neutral-800 font-semibold w-full text-[13px] my-1'>Watches</h5>
        <h5 className='text-neutral-800 font-semibold w-full text-[13px] my-1'>Electronics</h5>
        <h5 className='text-neutral-800 font-semibold w-full text-[13px] my-1'>Kids</h5>
      </div>
      <div className='border w-full mt-0 px-6 pb-3 rounded-b-md'>
        <h5 className='text-neutral-500 w-full text-[12px] my-3 font-medium'>RATING</h5>
        <div className="flex items-center justify-between py-1 cursor-pointer">
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-neutral-500" />
          </div>
          <span>and Above</span>
        </div>
        <div className="flex items-center justify-between py-1 cursor-pointer">
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-neutral-500" />
            <BsStarFill className="text-neutral-500" />
          </div>
          <span>and Above</span>
        </div>
        <div className="flex items-center justify-between py-1 cursor-pointer">
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-neutral-500" />
            <BsStarFill className="text-neutral-500" />
            <BsStarFill className="text-neutral-500" />
          </div>
          <span>and Above</span>
        </div>
        <div className="flex items-center justify-between py-1 cursor-pointer">
          <div className="flex gap-1">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-neutral-500" />
            <BsStarFill className="text-neutral-500" />
            <BsStarFill className="text-neutral-500" />
            <BsStarFill className="text-neutral-500" />
          </div>
          <span>and Above</span>
        </div>
      </div>
    </div>
  )
}

export default Filter