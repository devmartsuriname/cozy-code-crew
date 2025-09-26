import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const CheckoutMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Checkout || Tourex" />
      <Wrapper>
        <div>Checkout - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default CheckoutMain;