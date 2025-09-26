import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HotelGridTwoMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Hotel Grid Two || Tourex" />
      <Wrapper>
        <div>Hotel Grid Two - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HotelGridTwoMain;