import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tourex - Travel & Tour Booking</title>
        <meta name="description" content="Discover amazing destinations with Tourex - Your trusted travel partner for unforgettable experiences" />
        <meta name="keywords" content="travel, tour, booking, vacation, holiday, destination" />
        <meta name="author" content="Tourex" />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;