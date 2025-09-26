import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeTwoMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Home Two || Tourex" />
      <Wrapper>
        <div>Home Two - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeTwoMain;