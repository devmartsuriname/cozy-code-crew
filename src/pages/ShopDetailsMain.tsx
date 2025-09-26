import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const ShopDetailsMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Shop Details || Tourex" />
      <Wrapper>
        <div>Shop Details - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default ShopDetailsMain;