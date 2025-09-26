import { Helmet } from "react-helmet-async";

interface SEOProps {
  pageTitle: string;
}

const SEO = ({ pageTitle }: SEOProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="Tourex - Travel & Tour React JS Template" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Helmet>
  );
};

export default SEO;