import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const BlogTwoMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Blog Standard || Tourex" />
      <Wrapper>
        <div>Blog Standard - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default BlogTwoMain;