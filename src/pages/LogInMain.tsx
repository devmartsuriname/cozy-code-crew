import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const LogInMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Login || Tourex" />
      <Wrapper>
        <div>Login - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default LogInMain;