'use client';

import { BsStarHalf, BsCartFill } from 'react-icons/bs';
import Image from "next/image";

const ProductsList = () => {
  return (
    <div className="flex flex-col items-center bg-neutral-400 border rounded-md mb-2">
        <Image
        width="100"
        height="100"
        alt="Product"
        src="/images/products/img-9.png"
        className="w-[100%] p-[20%]"
        />
        <div className="flex flex-col p-4 items-start  bg-white w-full gap-4">
            <h2 className="font-semibold">Sample Product</h2>
            <div className="flex items-center justify-between w-[100%]">
                <h2 className="font-semibold">$400</h2>
                <div className="flex items-center justify-center gap-2">
                    <p className='text-[12px]'>3.2</p>
                    <BsStarHalf 
                        className="text-yellow-500 text-[14px]"
                    />
                </div>
            </div>
            <button className='bg-blue-600 rounded-md flex p-1 px-2 text-white hover:bg-blue-700'>
                <BsCartFill 
                    className="text-white text-[20px]"
                />
                Add to cart
            </button>
        </div>
    </div>
  )
}

export default ProductsList