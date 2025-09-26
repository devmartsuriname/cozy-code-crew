import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const BlogDetailsMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Blog Details || Tourex" />
      <Wrapper>
        <div>Blog Details - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default BlogDetailsMain;