import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeFiveMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Home Five || Tourex" />
      <Wrapper>
        <div>Home Five - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeFiveMain;