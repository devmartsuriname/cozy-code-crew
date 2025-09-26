import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const WishlistMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Wishlist || Tourex" />
      <Wrapper>
        <div>Wishlist - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default WishlistMain;