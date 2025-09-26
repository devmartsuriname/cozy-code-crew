import HeaderOne from "../../layouts/headers/HeaderOne";
import FooterOne from "../../layouts/footers/FooterOne";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <>
      <HeaderOne />
      <main>
        <div className="container pt-100 pb-100">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1>{title} Page</h1>
                <p>This page is under construction. Coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
};

export default PlaceholderPage;