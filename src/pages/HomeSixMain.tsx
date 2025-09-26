import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeSixMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Home Six || Tourex" />
      <Wrapper>
        <div>Home Six - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeSixMain;