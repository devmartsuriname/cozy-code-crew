import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const BlogOneMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Blog Grid || Tourex" />
      <Wrapper>
        <div>Blog Grid - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default BlogOneMain;