import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";
import HomeOne from "../components/homes/home-one";

const HomeOneMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Tourex" />
      <Wrapper>
        <HomeOne />
      </Wrapper>
    </HelmetProvider>
  );
};

export default HomeOneMain;