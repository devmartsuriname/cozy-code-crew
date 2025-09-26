import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeThreeMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Home Three || Tourex" />
      <Wrapper>
        <div>Home Three - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeThreeMain;