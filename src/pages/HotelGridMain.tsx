import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HotelGridMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Hotel Grid || Tourex" />
      <Wrapper>
        <div>Hotel Grid - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HotelGridMain;