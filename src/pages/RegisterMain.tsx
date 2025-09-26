import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const RegisterMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Register || Tourex" />
      <Wrapper>
        <div>Register - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default RegisterMain;