import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const TourDetailsOneMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Tour Details One || Tourex" />
      <Wrapper>
        <div>Tour Details One - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default TourDetailsOneMain;