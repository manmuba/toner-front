import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import HomeSlider from '../Components/HomeSlider'
import ColsForHome from '../Components/ColsForHome'

const HomePage = () => {
  return (
    <div>
        <Header />
        <HomeSlider />
        <ColsForHome />
        <Footer />
    </div>
  )
}

export default HomePage