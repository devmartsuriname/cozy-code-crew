import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const CartMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Cart || Tourex" />
      <Wrapper>
        <div>Cart - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default CartMain;