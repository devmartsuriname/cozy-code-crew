import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const ShopMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Shop || Tourex" />
      <Wrapper>
        <div>Shop - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default ShopMain;