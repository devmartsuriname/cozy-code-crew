import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeFourMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Home Four || Tourex" />
      <Wrapper>
        <div>Home Four - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeFourMain;