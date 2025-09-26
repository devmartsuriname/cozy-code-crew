import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const TeamMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Team || Tourex" />
      <Wrapper>
        <div>Team - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default TeamMain;