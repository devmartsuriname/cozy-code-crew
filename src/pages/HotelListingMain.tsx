import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HotelListingMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Hotel Listing || Tourex" />
      <Wrapper>
        <div>Hotel Listing - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HotelListingMain;