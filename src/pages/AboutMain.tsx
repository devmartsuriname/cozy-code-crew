import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const AboutMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="About || Tourex" />
      <Wrapper>
        <div>About - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default AboutMain;