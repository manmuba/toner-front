import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import HomeSlider from '../Components/HomeSlider'
import ColsForHome from '../Components/ColsForHome'

const HomePage = () => {
  return (
    <div>
        <Header />
        {/* <HomeSlider /> */}
        <ColsForHome />
        <div className="flex items-center w-[75vw] flex-col justify-center text-center pl-[24vw]">
          <h4 className='font-semibold text-[20px] py-4 pt-12'>Latest Arrival</h4>
          <p className='w-[50vw] flex items-center justify-center text-sm text-neutral-500 pb-6'>What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.</p>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage