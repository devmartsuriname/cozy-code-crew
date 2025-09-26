import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";
import NotFound from "../components/pages/error";

const ErrorMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="404 Error Page || Tourex - Travel & Tour React JS Template" />
      <Wrapper>
        <NotFound />
      </Wrapper>
    </HelmetProvider>
  );
};

export default ErrorMain;