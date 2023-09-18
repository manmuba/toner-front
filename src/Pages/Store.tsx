'use client';

import ProductsList from "../Common/ProductsList";
import ColsForHome from "../Components/ColsForHome";
import Filter from "../Components/Filter";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const Store = () => {
    return (
        <div>
            <Header />
            <div className="flex items-start justify-center md:ml-[3vw]">
                <Filter />
                <div className=" w-[95vw] md:w-[55vw] mr-8 md:mr-[8vw] px-8 grid grid-cols-1 md:grid-cols-3 lg:grid-col-3 gap-2 items-center md:gap-6">
                    <ProductsList />
                    <ProductsList />
                    <ProductsList />
                    <ProductsList />
                    <ProductsList />
                    <ProductsList />
                    <ProductsList />
                    <ProductsList />
                </div>
            </div>
            <ColsForHome />
            <Footer />
        </div>
    )
}

export default Store