import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeSevenMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Home Seven || Tourex" />
      <Wrapper>
        <div>Home Seven - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeSevenMain;