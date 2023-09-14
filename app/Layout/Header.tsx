import Logo from "../Common/Logo";

import { BiMenu, BiSearch } from 'react-icons/bi';
import { BsCart, BsSun } from 'react-icons/bs';
import Avatar from "../Common/Avatar";


const Header = () => {
    const isDark = false
    return (
        <div className="flex flex-row items-center justify-between m-3 md:justify-between lg:justify-around md:mx-5 lg:mx-20">
            <div className="flex md:hidden p-3 bg-[#4b93ff1a] text-[#4b93ff] border-transparent hover:text-[#fff] hover:bg-[#4484e6] transition delay-75 rounded-md cursor-pointer relative left-6">
                <BiMenu
                    className="text-[22px]"
                />
            </div>
            <div className="hidden md:flex">
                <Logo isDark={isDark} />
            </div>
            <ul className="hidden md:flex flex-row items-center gap-8 relative left-8">
                <li className="text-neutral-400 font-medium cursor-pointer hover:text-[#1ea6d3] transition delay-75 text-[15px]">Demos</li>
                <li className="text-neutral-400 font-medium cursor-pointer hover:text-[#1ea6d3] transition delay-75 text-[15px]">Catalog</li>
                <li className="text-neutral-400 font-medium cursor-pointer hover:text-[#1ea6d3] transition delay-75 text-[15px]">Shop</li>
                <li className="text-neutral-400 font-medium cursor-pointer hover:text-[#1ea6d3] transition delay-75 text-[15px]">Pages</li>
                <li className="text-neutral-400 font-medium cursor-pointer hover:text-[#1ea6d3] transition delay-75 text-[15px]">Contact</li>
            </ul>
            <div className="flex flex-row items-center justify-center gap-2">
                <div className="flex p-3 rounded-full hover:bg-neutral-300 transition delay-75 cursor-pointer">
                    <BiSearch
                        className='text-[22px] text-neutral-400'
                    />
                </div>
                <div className="flex p-3 rounded-full hover:bg-neutral-300 transition delay-75 cursor-pointer">
                    <BsCart
                        className='text-[16px] text-semibold text-neutral-400'
                    />
                </div>
                <span className="relative bottom-3 right-7 bg-red-500 rounded-full px-[5px] text-white text-[10px] py-[1px]">4</span>
                <div className="flex p-3 rounded-full hover:bg-neutral-300 transition delay-75 relative right-6 cursor-pointer">
                    <BsSun
                        className='text-[22px] text-semibold text-neutral-400'
                    />
                </div>
                <div className="flex p-3 rounded-full relative right-6 cursor-pointer">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header