import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const TourDetailsTwoMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Tour Details Two || Tourex" />
      <Wrapper>
        <div>Tour Details Two - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default TourDetailsTwoMain;