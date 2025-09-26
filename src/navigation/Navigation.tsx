import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import SEO from "../components/seo/SEO";

// Main pages
import HomeOneMain from "../pages/HomeOneMain";
import HomeTwoMain from "../pages/HomeTwoMain";
import HomeThreeMain from "../pages/HomeThreeMain";
import HomeFourMain from "../pages/HomeFourMain";
import HomeFiveMain from "../pages/HomeFiveMain";
import HomeSixMain from "../pages/HomeSixMain";
import HomeSevenMain from "../pages/HomeSevenMain";
import AboutMain from "../pages/AboutMain";
import ContactMain from "../pages/ContactMain";
import PricingMain from "../pages/PricingMain";
import LogInMain from "../pages/LogInMain";
import RegisterMain from "../pages/RegisterMain";
import FaqMain from "../pages/FaqMain";
import TeamMain from "../pages/TeamMain";
import TeamDetailsMain from "../pages/TeamDetailsMain";
import ShopMain from "../pages/ShopMain";
import ShopDetailsMain from "../pages/ShopDetailsMain";
import CartMain from "../pages/CartMain";
import WishlistMain from "../pages/WishlistMain";
import CheckoutMain from "../pages/CheckoutMain";
import HotelGridMain from "../pages/HotelGridMain";
import HotelGridTwoMain from "../pages/HotelGridTwoMain";
import HotelListingMain from "../pages/HotelListingMain";
import TourGridOneMain from "../pages/TourGridOneMain";
import TourDetailsOneMain from "../pages/TourDetailsOneMain";
import TourDetailsTwoMain from "../pages/TourDetailsTwoMain";
import BlogOneMain from "../pages/BlogOneMain";
import BlogTwoMain from "../pages/BlogTwoMain";
import BlogDetailsMain from "../pages/BlogDetailsMain";
import ErrorMain from "../pages/ErrorMain";

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <SEO />
      <ScrollToTop />
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<HomeOneMain />} />
        <Route path="/home-one" element={<HomeOneMain />} />
        <Route path="/home-two" element={<HomeTwoMain />} />
        <Route path="/home-three" element={<HomeThreeMain />} />
        <Route path="/home-four" element={<HomeFourMain />} />
        <Route path="/home-five" element={<HomeFiveMain />} />
        <Route path="/home-six" element={<HomeSixMain />} />
        <Route path="/home-seven" element={<HomeSevenMain />} />
        
        {/* Pages */}
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/pricing" element={<PricingMain />} />
        <Route path="/login" element={<LogInMain />} />
        <Route path="/register" element={<RegisterMain />} />
        <Route path="/faq" element={<FaqMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/team-details" element={<TeamDetailsMain />} />
        
        {/* Shop */}
        <Route path="/shop" element={<ShopMain />} />
        <Route path="/shop-details" element={<ShopDetailsMain />} />
        <Route path="/cart" element={<CartMain />} />
        <Route path="/wishlist" element={<WishlistMain />} />
        <Route path="/checkout" element={<CheckoutMain />} />
        
        {/* Hotels */}
        <Route path="/hotel-grid" element={<HotelGridMain />} />
        <Route path="/hotel-grid-2" element={<HotelGridTwoMain />} />
        <Route path="/hotel-listing" element={<HotelListingMain />} />
        
        {/* Tours */}
        <Route path="/tour-grid-1" element={<TourGridOneMain />} />
        <Route path="/tour-details-1" element={<TourDetailsOneMain />} />
        <Route path="/tour-details-2" element={<TourDetailsTwoMain />} />
        
        {/* Blog */}
        <Route path="/blog-1" element={<BlogOneMain />} />
        <Route path="/blog-2" element={<BlogTwoMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        
        {/* Error */}
        <Route path="/404" element={<ErrorMain />} />
        <Route path="*" element={<ErrorMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;