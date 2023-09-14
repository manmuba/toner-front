"use client";

import Image from "next/image";

interface LogoProps {
    isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({
    isDark
}) => {
    return (<>
        {isDark ?
            <Image
                className=" cursor-pointer"
                height="110"
                width="110"
                alt="Avatar"
                src="/images/logo-light.png"
            /> : 
            <Image
                className=" cursor-pointer"
                height="110"
                width="110"
                alt="Avatar"
                src="/images/logo-dark.png"
            />
            }
    </>
    )
}

export default Logo