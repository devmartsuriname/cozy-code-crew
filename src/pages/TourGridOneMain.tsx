import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const TourGridOneMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Tour Grid One || Tourex" />
      <Wrapper>
        <div>Tour Grid One - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default TourGridOneMain;