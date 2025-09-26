import { HelmetProvider } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import Wrapper from "../layouts/Wrapper";

const TeamDetailsMain = () => {
  return (
    <HelmetProvider>
      <SEO pageTitle="Team Details || Tourex" />
      <Wrapper>
        <div>Team Details - Coming Soon</div>
      </Wrapper>
    </HelmetProvider>
  );
};

export default TeamDetailsMain;