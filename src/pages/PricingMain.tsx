import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const PricingMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Pricing || Tourex" />
      <Wrapper>
        <div>Pricing - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default PricingMain;