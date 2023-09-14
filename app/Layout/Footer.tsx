'use client'
import { BsFacebook, BsTwitter, BsGoogle, BsPinterest } from 'react-icons/bs';

import Logo from "../Common/Logo"

const Footer = () => {
    const dark = true
    return (
        <div className="bg-[#0b1729] w-full pt-16 flex flex-col justify-center px-8 lg:px-[12vw] ">
            <div className="md:grid md:grid-cols-3 lg:grid-cols-[32%,17%,17%,17%,17%] w-[75vw]">
                <div className="flex flex-col relative top-1">
                    <Logo isDark={dark} />
                    <p className="pt-6 text-[13px] font-medium text-neutral-500">Toner provides best fashion experience for both men and women at best pricing. We follow New fashion approach to give best premium feel.</p>
                    <br />
                    <div className="flex flex-row items-center justify-start gap-3 my-6">
                        <div className="p-3 rounded-full bg-[#222d3d] hover:bg-[#897aff] transition delay-75 cursor-pointer">
                            <BsFacebook
                                className='text-white'
                            />
                        </div>
                        <div className="p-3 rounded-full bg-[#222d3d] hover:bg-[#897aff] transition delay-75 cursor-pointer">
                            <BsTwitter
                                className='text-white'
                            />
                        </div>
                        <div className="p-3 rounded-full bg-[#222d3d] hover:bg-[#897aff] transition delay-75 cursor-pointer">
                            <BsGoogle
                                className='text-white'
                            />
                        </div>
                        <div className="p-3 rounded-full bg-[#222d3d] hover:bg-[#897aff] transition delay-75 cursor-pointer">
                            <BsPinterest
                                className='text-white'
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h5 className='pt-1 text-neutral-300 font-semibold text-[18px] pb-6'>Categories</h5>
                    <ul className="flex flex-col gap-4 pb-10">
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Men</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Jewellers</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Accessories</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Clothing</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Beauty Items</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h5 className='pt-1 text-neutral-300 font-semibold text-[18px] pb-6'>Information</h5>
                    <ul className="flex flex-col gap-4 pb-10">
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Custom Service</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>FAQs</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Ordering</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Tracking</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Contacts</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h5 className='pt-1 text-neutral-300 font-semibold text-[18px] pb-6'>My Account</h5>
                    <ul className="flex flex-col gap-4 pb-10">
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Sign In</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>View Cart</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>My Wishlist</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Track My Order</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Help</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h5 className='pt-1 text-neutral-300 font-semibold text-[18px] pb-6'>Customer Service</h5>
                    <ul className="flex flex-col gap-4 pb-10">
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Payment Methods</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Money-back!</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Returns</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Shipping</li>
                        <li className='text-neutral-500 font-medium text-[14px] cursor-pointer'>Terms and conditions</li>
                    </ul>
                </div>
            </div>
            <hr className='text-[1px] text-neutral-500'/>
            <span className='text-sm text-neutral-600 py-8'>2023 © Toner. Design & Develop by Mubarek Shikur</span>
            
        </div>
    )
}

export default Footer