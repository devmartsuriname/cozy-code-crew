import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const FaqMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="FAQ || Tourex" />
      <Wrapper>
        <div>FAQ - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default FaqMain;