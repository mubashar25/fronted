import React from "react";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import MainSection from "../components/MainSection";
import SaleSection from "../components/SaleSection";
import RecommendSection from "../components/RecommendSection";
import Footer from "../components/Layout/Footer";
import BlockItemsGroupA from "../components/BlockItemsGroupA";
import BlockItemsGroupB from "../components/BlockItemsGroupB";
import InquirySection from "../components/InquirySection";
import ServiceSection from "../components/ServiceSection";
import CountrySection from "../components/CountrySection";
import Newsletter from "../components/Layout/Newsletter";

const HomePage = () => {
    return (
        <div>
            <MainSection />
            <SaleSection />
            <BlockItemsGroupA/>
            <BlockItemsGroupB/>
            <InquirySection/>
            <RecommendSection />
            <ServiceSection/>
            <CountrySection/>
            <Newsletter/>
        </div>
    );
};

export default HomePage;