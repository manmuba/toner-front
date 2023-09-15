'use client'

import React, { useState } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Image from 'next/image'
import { BsStarFill, BsStarHalf, BsFillTagFill } from 'react-icons/bs'
import { FiCheckCircle } from 'react-icons/fi'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <Header />
            <div className='grid grid-cols-1 md:grid-cols-2 px-8 md:px-[12vw] w-full'>
                <div className="flex flex-col">
                    <Image
                        width='450'
                        height='500'
                        alt='Image'
                        className='rounded-md bg-[#4b93ff1a] p-5'
                        src="/images/products/img-31.png"
                    />
                </div>
                <div className="">
                    <div className="flex gap-4 items-center">
                        <div className="flex gap-1">
                            <BsStarFill
                                className="text-yellow-500 text-[14px]"
                            />
                            <BsStarFill
                                className="text-yellow-500 text-[14px]"
                            />
                            <BsStarFill
                                className="text-yellow-500 text-[14px]"
                            />
                            <BsStarFill
                                className="text-yellow-500 text-[14px]"
                            />
                            <BsStarHalf
                                className="text-yellow-500 text-[14px]"
                            />
                        </div>
                        <h5 className='text-[13px] text-neutral-800 font-medium'>(50 Review)</h5>
                    </div>
                    <h2 className='my-3 font-semibold text-[20px]'>Opinion Striped Round Neck Green T-shirt</h2>
                    <p className='text-[13px] font-medium text-neutral-400'>The best part about stripped t shirt denim & white sneakers or wear it with a cool chinos and blazer to dress up</p>
                    <h2 className='my-3 font-semibold text-[20px]'>$185.79</h2>
                    <div className="flex gap-2 items-center mb-2">
                        <FiCheckCircle
                            className="text-green-400"
                        />
                        <p className='text-[13px] font-medium text-neutral-600'>In stock</p>
                    </div>
                    <div className="flex gap-2 items-center mb-2">
                        <FiCheckCircle
                            className="text-green-400"
                        />
                        <p className='text-[13px] font-medium text-neutral-600'>Free delivery available</p>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <FiCheckCircle
                            className="text-green-400"
                        />
                        <p className='text-[13px] font-medium text-neutral-600'>Sales 10% Off Use Code: <span className='font-bold text-[14px]'>FASHION10</span></p>
                    </div>
                    <h2 className='text-[13px] font-semibold text-neutral-400 mb-2'>Available offers :</h2>
                    <div className="flex gap-2 items-center mb-3">
                        <BsFillTagFill
                            className="text-green-500"
                        />
                        <p className='text-[13px] font-medium text-neutral-600'><span className='font-bold text-[14px]'>Bank Offer</span>10% instant discount on Federal Bank Debit Cards, up to ₹3000 on orders of ₹5,000 and above</p>
                    </div>
                    <div className="flex gap-2 items-center mb-3">
                        <BsFillTagFill
                            className="text-green-500"
                        />
                        <p className='text-[13px] font-medium text-neutral-600'><span className='font-bold text-[14px]'>Bank Offer</span>10% instant discount on Federal Bank Debit Cards, up to ₹3000 on orders of ₹5,000 and above</p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <h1 className='text-[14px] font-bold'>Quantity</h1>
                        <div className="flex border rounded-full p-1">
                            <div className={`flex items-center justify-center rounded-full p-1 border ${quantity<=1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => {setQuantity(quantity-1)}}>
                                <AiOutlineMinus />
                            </div>
                            <h2 className='mx-5'>{quantity}</h2>
                            <div className="flex items-center justify-center rounded-full p-1 border cursor-pointer" onClick={() => {setQuantity(quantity+1)}}>
                                <AiOutlinePlus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetail