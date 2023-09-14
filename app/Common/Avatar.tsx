"use client";

import Image from "next/image";


const Avatar = () => {
    return (
            <Image
                className="h-[32px] w-[32px] rounded-full"
                height="64"
                width="64"
                alt="Avatar"
                src="/images/users/avatar-1.jpg"
            /> 
    )
}

export default Avatar