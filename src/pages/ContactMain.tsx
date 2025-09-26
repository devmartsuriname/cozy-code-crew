import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const ContactMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Contact || Tourex" />
      <Wrapper>
        <div>Contact - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default ContactMain;