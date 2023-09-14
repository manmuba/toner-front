'use client';

import Image from "next/image";

const ColsForHome = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 px-8 md:px-[12vw] gap-4">
        <div className="flex flex-row items-center gap-4 my-3">
            <Image
                className="w-[3rem] h-[3rem]"
                width="300"
                height="300"
                alt="Delivery"
                src="/images/ecommerce/fast-delivery.png"
            />
            <div className="flex flex-col gap-2">
            <h5 className="text-[14px] font-semibold">Fast & Secure Delivery</h5>
            <p className="text-[12px] text-neutral-500">Tell about your service.</p>
            </div>
        </div>
        <div className="flex flex-row items-center gap-4 mt-3 ">
            <Image
                className="w-[3rem] h-[3rem]"
                width="300"
                height="300"
                alt="Delivery"
                src="/images/ecommerce/returns.png"
            />
            <div className="flex flex-col gap-2">
            <h5 className="text-[14px] font-semibold">2 Days Return Policy</h5>
            <p className="text-[12px] text-neutral-500">No question ask.</p>
            </div>
        </div>
        <div className="flex flex-row items-center gap-4 mt-3">
            <Image
                className="w-[3rem] h-[3rem]"
                width="300"
                height="300"
                alt="Delivery"
                src="/images/ecommerce/guarantee-certificate.png"
            />
            <div className="flex flex-col gap-2">
            <h5 className="text-[14px] font-semibold">Money Back Guarantee</h5>
            <p className="text-[12px] text-neutral-500">Within 5 business days</p>
            </div>
        </div>
        <div className="flex flex-row items-center gap-4 mt-3">
            <Image
                className="w-[3rem] h-[3rem]"
                width="300"
                height="300"
                alt="Delivery"
                src="/images/ecommerce/24-hours-support.png"
            />
            <div className="flex flex-col gap-2">
            <h5 className="text-[14px] font-semibold">24 X 7 Service</h5>
            <p className="text-[12px] text-neutral-500">Online service for customer</p>
            </div>
        </div>
    </div>
  )
}

export default ColsForHome